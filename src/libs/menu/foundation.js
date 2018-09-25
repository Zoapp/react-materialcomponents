/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Zrmc from "../";

// From https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/constants.js
const ANCHOR_TO_MENU_WIDTH_RATIO = 0.67;
const OFFSET_TO_MENU_HEIGHT_RATIO = 0.1;
const MARGIN_TO_EDGE = 32;
const CORNER_ORIGIN = 0;
const CORNER_BOTTOM = 1;
// const CORNER_CENTER = 2;
const CORNER_RIGHT = 4;
const CORNER_FLIP_RTL = 8;

// From https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/foundation.js
class RMDCMenuFoundation {
  static getAutoLayoutMeasurements(adapter) {
    const anchorRect = adapter.anchorRef.getBoundingClientRect();
    const menuRect = adapter.menuRef.innerRef.getBoundingClientRect();
    const viewport = { width: window.innerWidth, height: window.innerHeight };

    return {
      viewport,
      viewportDistance: {
        top: anchorRect.top,
        right: viewport.width - anchorRect.right,
        left: anchorRect.left,
        bottom: viewport.height - anchorRect.bottom,
      },
      anchorHeight: anchorRect.height,
      anchorWidth: anchorRect.width,
      menuHeight: menuRect.height,
      menuWidth: menuRect.width,
    };
  }

  static getAnchorCorner(adapter) {
    // TODO
    return adapter.props.children.corner || 0;
  }

  static getAnchorMargin(adapter) {
    const margin =
      (adapter.props.children && adapter.props.children.margin) || {};
    return {
      top: margin.top || 0,
      bottom: margin.bottom || 0,
      left: margin.left || 0,
      right: margin.right || 0,
    };
  }

  static getOriginCorner(
    origin,
    anchorMargin,
    anchorCorner,
    isRtl,
    { viewportDistance, anchorHeight, anchorWidth, menuHeight, menuWidth },
  ) {
    let corner = origin;
    const isBottomAligned = Boolean(anchorCorner && CORNER_BOTTOM);
    const availableTop = isBottomAligned
      ? viewportDistance.top + anchorHeight + anchorMargin.bottom
      : viewportDistance.top + anchorMargin.top;
    const availableBottom = isBottomAligned
      ? viewportDistance.bottom - anchorMargin.bottom
      : viewportDistance.bottom + anchorHeight - anchorMargin.top;

    const topOverflow = menuHeight - availableTop;
    const bottomOverflow = menuHeight - availableBottom;
    if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
      corner = corner || CORNER_BOTTOM;
    }

    const isFlipRtl = Boolean(anchorCorner && CORNER_FLIP_RTL);
    const avoidHorizontalOverlap = anchorCorner && CORNER_RIGHT;
    const isAlignedRight =
      Boolean(avoidHorizontalOverlap && !isRtl) ||
      (!avoidHorizontalOverlap && isFlipRtl && isRtl);
    const availableLeft = isAlignedRight
      ? viewportDistance.left + anchorWidth + anchorMargin.right
      : viewportDistance.left + anchorMargin.left;
    const availableRight = isAlignedRight
      ? viewportDistance.right - anchorMargin.right
      : viewportDistance.right + anchorWidth - anchorMargin.left;

    const leftOverflow = menuWidth - availableLeft;
    const rightOverflow = menuWidth - availableRight;

    if (
      (leftOverflow < 0 && isAlignedRight && isRtl) ||
      (avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0) ||
      (rightOverflow > 0 && leftOverflow < rightOverflow)
    ) {
      corner = corner || CORNER_RIGHT;
    }

    return corner;
  }

  static getHorizontalOriginOffset(
    corner,
    anchorMargin,
    anchorCorner,
    { anchorWidth },
  ) {
    const isRightAligned = Boolean(corner && CORNER_RIGHT);
    const avoidHorizontalOverlap = Boolean(anchorCorner && CORNER_RIGHT);
    let x = 0;
    if (isRightAligned) {
      const rightOffset = avoidHorizontalOverlap
        ? anchorWidth - anchorMargin.left
        : anchorMargin.right;
      x = rightOffset;
    } else {
      const leftOffset = avoidHorizontalOverlap
        ? anchorWidth - anchorMargin.right
        : anchorMargin.left;
      x = leftOffset;
    }
    return x;
  }

  static getVerticalOriginOffset(
    corner,
    anchorMargin,
    anchorCorner,
    { viewport, viewportDistance, anchorHeight, menuHeight },
  ) {
    const isBottomAligned = Boolean(corner && CORNER_BOTTOM);
    const avoidVerticalOverlap = Boolean(anchorCorner && CORNER_BOTTOM);
    const canOverlapVertically = !avoidVerticalOverlap;
    let y = 0;

    if (isBottomAligned) {
      y = avoidVerticalOverlap
        ? anchorHeight - anchorMargin.top
        : -anchorMargin.bottom;
      // adjust for when menu can overlap anchor, but too tall to be aligned to bottom
      // anchor corner. Bottom margin is ignored in such cases.
      if (
        canOverlapVertically &&
        menuHeight > viewportDistance.top + anchorHeight
      ) {
        y = -(
          Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) -
          (viewportDistance.top + anchorHeight)
        );
      }
    } else {
      y = avoidVerticalOverlap
        ? anchorHeight + anchorMargin.bottom
        : anchorMargin.top;
      // adjust for when menu can overlap anchor, but too tall to be aligned to top
      // anchor corners. Top margin is ignored in that case.
      if (
        canOverlapVertically &&
        menuHeight > viewportDistance.bottom + anchorHeight
      ) {
        y = -(
          Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) -
          (viewportDistance.bottom + anchorHeight)
        );
      }
    }
    return y;
  }

  static getMenuMaxHeight(
    corner,
    anchorMargin,
    anchorCorner,
    { viewportDistance },
  ) {
    let maxHeight = 0;
    const isBottomAligned = Boolean(corner && CORNER_BOTTOM);

    // When maximum height is not specified, it is handled from css.
    if (anchorCorner && CORNER_BOTTOM) {
      if (isBottomAligned) {
        maxHeight = viewportDistance.top + anchorMargin.top;
      } else {
        maxHeight = viewportDistance.bottom - anchorMargin.bottom;
      }
    }
    return maxHeight;
  }

  static autoPosition(adapter) {
    // Compute measurements for autoposition methods reuse.
    const measures = RMDCMenuFoundation.getAutoLayoutMeasurements(adapter);
    const anchorMargin = RMDCMenuFoundation.getAnchorMargin(adapter);
    const anchorCorner = RMDCMenuFoundation.getAnchorCorner(adapter);

    const isRtl = Zrmc.isRtl(adapter);
    const corner = RMDCMenuFoundation.getOriginCorner(
      CORNER_ORIGIN,
      anchorMargin,
      anchorCorner,
      isRtl,
      measures,
    );
    const maxMenuHeight = RMDCMenuFoundation.getMenuMaxHeight(
      corner,
      anchorMargin,
      anchorCorner,
      measures,
    );
    let verticalAlignment = corner && CORNER_BOTTOM ? "bottom" : "top";
    let horizontalAlignment = corner && CORNER_RIGHT ? "right" : "left";
    const horizontalOffset = RMDCMenuFoundation.getHorizontalOriginOffset(
      corner,
      anchorMargin,
      anchorCorner,
      measures,
    );
    const verticalOffset = RMDCMenuFoundation.getVerticalOriginOffset(
      corner,
      anchorMargin,
      anchorCorner,
      measures,
    );
    const h = horizontalOffset ? `${horizontalOffset}px` : "0";
    const v = verticalOffset ? `${verticalOffset}px` : "0";
    const position = `${horizontalAlignment}: ${h}; ${verticalAlignment}: ${v};`;
    const { anchorWidth, menuHeight, menuWidth } = measures;
    // Center align when anchor width is comparable or greater than menu, otherwise keep corner.
    if (anchorWidth / menuWidth > ANCHOR_TO_MENU_WIDTH_RATIO) {
      horizontalAlignment = "center";
    }

    // Adjust vertical origin when menu is positioned with significant offset from anchor.
    // This is done so that scale animation is "anchored" on the anchor.
    if (
      !(anchorCorner && CORNER_BOTTOM) &&
      Math.abs(verticalOffset / menuHeight) > OFFSET_TO_MENU_HEIGHT_RATIO
    ) {
      const verticalOffsetPercent = Math.abs(verticalOffset / menuHeight) * 100;
      const originPercent =
        corner && CORNER_BOTTOM
          ? 100 - verticalOffsetPercent
          : verticalOffsetPercent;
      verticalAlignment = `${Math.round(originPercent * 100) / 100}%`;
    }

    const maxHeight = `maxHeight: ${maxMenuHeight}`;
    const transform = `transform-origin: ${horizontalAlignment} ${verticalAlignment};`;
    return `position: absolute; ${transform} ${position} ${maxHeight}`;
  }
}

export default RMDCMenuFoundation;
