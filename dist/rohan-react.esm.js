import React from 'react';
import classnames from 'classnames';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var renderColor = function renderColor(color) {
  switch (color) {
    case "primary":
      return " border-primary ";
    case "secondary":
      return " border-secondary ";
    case "white":
      return " border-white ";
    case "success":
      return " border-green-600 ";
    case "info":
      return " border-blue-600 ";
    case "danger":
      return " border-red-600 ";
    default:
      return " border-gray-400 dark:border-gray-500 ";
  }
};
var renderAlign = function renderAlign(align) {
  switch (align) {
    case "left":
      return "justify-start";
    case "right":
      return "justify-end";
    default:
      return "justify-center";
  }
};
var renderSize = function renderSize(size) {
  switch (size) {
    case "sm":
      return "h-4 w-4";
    case "lg":
      return "h-24 w-24";
    case "xl":
      return "h-32 w-32";
    default:
      return "h-8 w-8";
  }
};
var renderPosition = function renderPosition(position) {
  switch (position) {
    case "absolute":
      return "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    case "blockScreen":
      return "fixed inset-0 flex items-center justify-center ";
    default:
      return "static";
  }
};
var Spinner = function Spinner(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? "center" : _ref$align,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "static" : _ref$position,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  return React.createElement("div", {
    className: renderPosition(position) + " dark:bg-[#3b3b40]"
  }, React.createElement("div", {
    className: renderAlign(align) + " flex items-center"
  }, React.createElement("div", {
    className: renderSize(size) + " animate-spin rounded-full border-b-2 " + renderColor(variant)
  })));
};

var _excluded = ["children", "variant", "modifier", "disabled", "active", "size", "fullwidth", "loading", "rounded", "className"];
var renderVariant = function renderVariant(_ref) {
  var variant = _ref.variant,
    disabled = _ref.disabled,
    modifier = _ref.modifier,
    active = _ref.active;
  if (disabled) return "bg-transparent border-0 dark:bg-primary-gray dark:border-secondary-gray dark:text-muted-text tex-muted-text cursor-not-allowed hover:enabled:shadow-none text-secondary-text";
  switch (variant) {
    case "primary":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-primary ";
      } else if (modifier === "outline") {
        return (active ? "bg-primary/10 text-primary" : "bg-transparent border-primary text-primary") + " hover:bg-primary/5";
      } else if (modifier === "light") {
        return "bg-primary/10 border-transparent text-primary shadow-none";
      } else {
        return "bg-primary text-white border-0 hover:bg-primary/80";
      }
    case "secondary":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-secondary";
      } else if (modifier === "outline") {
        return "bg-transparent border-secondary text-secondary ";
      } else if (modifier === "light") {
        return "bg-secondary/10 border-transparent text-secondary";
      } else {
        return "bg-secondary border-transparent text-white hover:bg-secondary/90";
      }
    case "black":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-black";
      } else if (modifier === "outline") {
        return "" + (active ? "bg-primary text-white" : "bg-transparent text-black");
      } else if (modifier === "light") {
        return "bg-black/10 border-transparent text-black";
      } else {
        return "bg-black border-transparent text-white hover:bg-black/80";
      }
    default:
      if (modifier === "gosht") {
        return "bg-transparent border-transparent uppercase text-primary-text disabled:border-0 disabled:text-secondary-text";
      } else if (modifier === "outline") {
        return "bg-transparent  border-secondary-text text-primary-text";
      } else if (modifier === "light") {
        return "bg-secondary-gray/40 border-transparent text-primary-color text-primary-text";
      } else {
        return "bg-secondary-gray hover:bg-secondary-gray/80 border-secondary-gray text-primary-text";
      }
  }
};
// const renderSize = (size: string): string => {
//   switch (size) {
//     case "xs":
//       return `text-[.8rem] h-[30px]`
//     case "sm":
//       return `text-sm h-[32px] `
//     case "lg":
//       return `text-base h-[44px] `
//     case "xl":
//       return `text-lg h-[58px] `
//     default:
//       return `text-base h-[38px] `
//   }
// }
var Button = function Button(_ref2, ref) {
  var children = _ref2.children,
    _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? "default" : _ref2$variant,
    _ref2$modifier = _ref2.modifier,
    modifier = _ref2$modifier === void 0 ? "" : _ref2$modifier,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    _ref2$active = _ref2.active,
    active = _ref2$active === void 0 ? false : _ref2$active,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? "md" : _ref2$size,
    _ref2$fullwidth = _ref2.fullwidth,
    fullwidth = _ref2$fullwidth === void 0 ? false : _ref2$fullwidth,
    _ref2$loading = _ref2.loading,
    loading = _ref2$loading === void 0 ? false : _ref2$loading,
    _ref2$rounded = _ref2.rounded,
    rounded = _ref2$rounded === void 0 ? false : _ref2$rounded,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? "" : _ref2$className,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded);
  var sizes = {
    xs: "text-[.8rem] h-[30px]",
    sm: "text-sm h-[32px]",
    md: "text-base h-[38px]",
    lg: "text-base h-[44px]",
    xl: "text-lg h-[58px]"
  };
  // const variants = {
  //   primary: {
  //     default: `bg-primary text-white border-0 hover:bg-primary/80`,
  //     outline: `${
  //         active
  //           ? "bg-primary/10 text-primary"
  //           : "bg-transparent border-primary text-primary"
  //       } hover:bg-primary/5`,
  //     gosht: `bg-transparent border-0 text-primary`,
  //     light: `bg-primary/10 border-transparent text-primary shadow-none`
  //   },
  //   secondary: {
  //     default: `bg-secondary border-transparent text-white hover:bg-secondary/90`,
  //     outline: ``,
  //     gosht: ``,
  //     light: ``
  //   },
  //   black: {
  //     default: ``,
  //     outline: ``,
  //     gosht: ``,
  //     light: ``
  //   }
  // }
  return React.createElement("button", Object.assign({
    ref: ref,
    disabled: disabled || loading,
    className: "\n        relative group uppercase whitespace-nowrap text-center px-3 outline-none transition-all duration-100 active:enabled:scale-95 " + (fullwidth ? "flex w-full" : "inline-flex") + " gap-2 items-center justify-center hover:enabled:shadow border focus:ring-4 focus:ring-gray-200 focus:ring-opacity-30 \n        " + renderVariant({
      variant: variant,
      disabled: disabled,
      modifier: modifier,
      active: active
    }) + "\n        " + sizes[size] + "\n        " + (rounded ? "rounded-full" : "rounded-md") + "\n        " + (loading ? "bg-opacity-60 cursor-not-allowed" : "") + "\n        " + className + "\n      "
  }, props), React.createElement("span", {
    className: classnames("inline-flex items-center gap-2 ", loading && "opacity-5")
  }, children), loading && React.createElement(Spinner, {
    position: "absolute",
    size: "sm"
  }));
};
var ButtonRef = /*#__PURE__*/React.forwardRef(Button);

var _excluded$1 = ["children", "variant", "modifier", "disabled", "active", "size", "loading", "position", "className"];
var renderVariant$1 = function renderVariant(_ref) {
  var variant = _ref.variant,
    disabled = _ref.disabled,
    modifier = _ref.modifier,
    active = _ref.active;
  if (disabled) return "bg-gray-100 tex-muted-text cursor-not-allowed hover:shadow-none text-secondary-text";
  switch (variant) {
    case "primary":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-primary ";
      } else if (modifier === "outline") {
        return (active ? "bg-primary/10 text-primary" : "bg-transparent border-primary text-primary") + " hover:bg-primary/5";
      } else if (modifier === "light") {
        return "bg-primary/10 border-transparent text-primary shadow-none";
      } else {
        return "bg-primary text-white border-0 hover:bg-primary/80";
      }
    case "secondary":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-secondary";
      } else if (modifier === "outline") {
        return "bg-transparent border-secondary text-secondary ";
      } else if (modifier === "light") {
        return "bg-secondary/10 border-transparent text-secondary";
      } else {
        return "bg-secondary border-transparent text-white hover:bg-secondary/90";
      }
    case "black":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-black";
      } else if (modifier === "outline") {
        return "" + (active ? "bg-primary text-white" : "bg-transparent text-black");
      } else if (modifier === "light") {
        return "bg-black/10 border-transparent text-black";
      } else {
        return "bg-black border-transparent text-white hover:bg-black/80";
      }
    default:
      if (modifier === "gosht") {
        return "bg-transparent border-transparent uppercase text-primary-text";
      } else if (modifier === "outline") {
        return "bg-transparent  border-secondary-text text-primary-text";
      } else if (modifier === "light") {
        return "bg-secondary-gray/40 border-transparent text-primary-color text-primary-text";
      } else {
        return "bg-secondary-gray hover:bg-secondary-gray/80 border-secondary-gray text-primary-text";
      }
  }
};
var renderSize$1 = function renderSize(size) {
  switch (size) {
    case "xs":
      return "text-[.8rem] w-[30px] h-[30px]";
    case "sm":
      return "text-sm h-[32px] w-[32px]";
    case "lg":
      return "text-base h-[44px] w-[44px]";
    case "xl":
      return "text-lg h-[50px] w-[50]";
    default:
      return "text-base h-[38px] w-[38px]";
  }
};
var IconButton = function IconButton(_ref2, ref) {
  var children = _ref2.children,
    _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? "default" : _ref2$variant,
    modifier = _ref2.modifier,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    _ref2$active = _ref2.active,
    active = _ref2$active === void 0 ? false : _ref2$active,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? "md" : _ref2$size,
    _ref2$loading = _ref2.loading,
    loading = _ref2$loading === void 0 ? false : _ref2$loading,
    _ref2$position = _ref2.position,
    position = _ref2$position === void 0 ? "relative" : _ref2$position,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? "" : _ref2$className,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded$1);
  return React.createElement("button", Object.assign({
    ref: ref,
    className: "\n        " + position + " rounded-full overflow-hidden  hover:shadow border active:scale-95 transition-all duration-100 focus:ring-4 focus:ring-gray-200 focus:ring-opacity-30  \n        " + renderVariant$1({
      variant: variant,
      disabled: disabled,
      modifier: modifier,
      active: active
    }) + "\n        \n        " + (loading ? "bg-opacity-50 cursor-not-allowed" : "") + "\n        " + className + "\n      ",
    disabled: loading || disabled
  }, props), React.createElement("span", {
    className: renderSize$1(size) + " text-center items-center justify-center inline-flex " + (loading && "opacity-5")
  }, children), loading && React.createElement(Spinner, {
    position: "absolute",
    size: "sm"
  }));
};
var IconButtonRef = /*#__PURE__*/React.forwardRef(IconButton);
// export default React.forwardRef(IconButton)

var LoadingLine = function LoadingLine(_ref) {
  var _ref$height = _ref.height,
    height = _ref$height === void 0 ? 2 : _ref$height,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "fixed" : _ref$position,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant;
  return React.createElement("div", {
    className: position + " load-bar top-0 right-0 z-[99999] w-full "
  }, React.createElement("span", {
    style: {
      height: height + "px"
    },
    className: "animate-loadingbar absolute inline h-full w-0 bg-" + variant + " rounded-full overflow-hidden"
  }));
};

export { ButtonRef as Button, IconButtonRef as IconButton, LoadingLine, Spinner };
//# sourceMappingURL=rohan-react.esm.js.map
