'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var AlertDialog = require('@radix-ui/react-alert-dialog');
var framerMotion = require('framer-motion');
var classnames = _interopDefault(require('classnames'));
var RadixAvatar = require('@radix-ui/react-avatar');
var Dialog = require('@radix-ui/react-dialog');
var Separator = require('@radix-ui/react-separator');
var RadixDropdownMenu = require('@radix-ui/react-dropdown-menu');
var ScrollArea = require('@radix-ui/react-scroll-area');
var RadixHoverCard = require('@radix-ui/react-hover-card');
var RadixPopover = require('@radix-ui/react-popover');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
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

var Backdrop = function Backdrop(_ref, ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "white" : _ref$variant,
    style = _ref.style;
  return React__default.createElement("div", {
    ref: ref,
    role: "backdrop",
    className: "fixed  inset-0 block",
    style: _extends({
      backgroundColor: variant === "white" ? "var(--backdrop-light-color)" : "var(--backdrop-dark-color)"
    }, style)
  });
};
var Backdrop$1 = /*#__PURE__*/React__default.forwardRef(Backdrop);

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
  return React__default.createElement("div", {
    className: renderPosition(position) + " dark:bg-[#3b3b40]"
  }, React__default.createElement("div", {
    className: renderAlign(align) + " flex items-center"
  }, React__default.createElement("div", {
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
  return React__default.createElement("button", Object.assign({
    ref: ref,
    disabled: disabled || loading,
    className: "\n        relative group uppercase whitespace-nowrap text-center px-3 outline-none transition-all duration-100 active:enabled:scale-95 " + (fullwidth ? "flex w-full" : "inline-flex") + " gap-2 items-center justify-center hover:enabled:shadow border focus:ring-4 focus:ring-gray-200 focus:ring-opacity-30 \n        " + renderVariant({
      variant: variant,
      disabled: disabled,
      modifier: modifier,
      active: active
    }) + "\n        " + sizes[size] + "\n        " + (rounded ? "rounded-full" : "rounded-md") + "\n        " + (loading ? "bg-opacity-60 cursor-not-allowed" : "") + "\n        " + className + "\n      "
  }, props), React__default.createElement("span", {
    className: classnames("inline-flex items-center gap-2 ", loading && "opacity-5")
  }, children), loading && React__default.createElement(Spinner, {
    position: "absolute",
    size: "sm"
  }));
};
var Button$1 = /*#__PURE__*/React__default.forwardRef(Button);

var Confirm = function Confirm(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "أنت متيقن من تنفيذ الطلب؟" : _ref$title,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? "بمجرد اتخاذك لهذا الاجراء, لا يمكنك العوده." : _ref$description,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    _ref$confirmLabel = _ref.confirmLabel,
    confirmLabel = _ref$confirmLabel === void 0 ? "تأكيد" : _ref$confirmLabel,
    _ref$confirmVariant = _ref.confirmVariant,
    confirmVariant = _ref$confirmVariant === void 0 ? "black" : _ref$confirmVariant,
    _ref$cancelLabel = _ref.cancelLabel,
    cancelLabel = _ref$cancelLabel === void 0 ? "إلغاء" : _ref$cancelLabel,
    children = _ref.children,
    _ref$asyncStatus = _ref.asyncStatus,
    asyncStatus = _ref$asyncStatus === void 0 ? false : _ref$asyncStatus,
    open = _ref.open,
    onChange = _ref.onChange,
    defaultOpen = _ref.defaultOpen,
    confirmProps = _ref.confirmProps,
    cancelProps = _ref.cancelProps;
  // A component can be considered controlled when its value prop is
  // not undefined.
  var isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  var hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  var _useState = React.useState(hasDefaultOpen ? defaultOpen : false),
    internalOpen = _useState[0],
    setInternalOpen = _useState[1];
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  var isOpen = isControlled ? open : internalOpen;
  var onOpenChange = function onOpenChange(opened) {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return React__default.createElement(AlertDialog.Root, {
    open: isOpen,
    onOpenChange: onOpenChange
  }, children, React__default.createElement(AlertDialog.Portal, null, React__default.createElement("div", {
    className: "fixed inset-0 overflow-y-auto z-30 h-screen"
  }, React__default.createElement(AlertDialog.Overlay, {
    asChild: true
  }, React__default.createElement(framerMotion.motion.div, {
    key: "modal-" + new Date().toDateString(),
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      opacity: {
        duration: 0.2
      },
      duration: 0.3,
      type: "linear"
    },
    exit: {
      opacity: 0
    }
  }, React__default.createElement(Backdrop$1, null))), React__default.createElement(framerMotion.AnimatePresence, null, React__default.createElement(ConfirmContent, {
    title: title,
    isOpen: isOpen,
    description: description,
    confirmLabel: confirmLabel,
    confirmVariant: confirmVariant,
    cancelLabel: cancelLabel,
    onConfirm: onConfirm,
    onCancel: onCancel,
    asyncStatus: asyncStatus,
    isControlled: isControlled,
    confirmProps: confirmProps,
    cancelProps: cancelProps
  })))));
};
var ConfirmTitle = function ConfirmTitle(_ref2) {
  var children = _ref2.children;
  return React__default.createElement(AlertDialog.Trigger, {
    asChild: true
  }, children);
};
var ConfirmContent = function ConfirmContent(_ref3) {
  var title = _ref3.title,
    description = _ref3.description,
    confirmLabel = _ref3.confirmLabel,
    confirmVariant = _ref3.confirmVariant,
    cancelLabel = _ref3.cancelLabel,
    onConfirm = _ref3.onConfirm,
    onCancel = _ref3.onCancel,
    asyncStatus = _ref3.asyncStatus,
    isControlled = _ref3.isControlled,
    isOpen = _ref3.isOpen,
    confirmProps = _ref3.confirmProps,
    cancelProps = _ref3.cancelProps;
  return isOpen ? React__default.createElement(framerMotion.motion.div, {
    key: new Date().toDateString(),
    initial: {
      opacity: 0,
      y: -100
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      opacity: {
        duration: 0.2
      },
      duration: 0.3,
      type: "linear"
    },
    exit: {
      opacity: 0,
      y: -100
    }
  }, React__default.createElement(AlertDialog.Content, {
    onEscapeKeyDown: function onEscapeKeyDown(event) {
      return event.preventDefault();
    },
    forceMount: true,
    className: " fixed top-8 left-[50%] -ml-[220px]  w-[440px] rounded-xl bg-card-bg-color p-5 shadow-overlap-shadow focus:outline-none"
  }, React__default.createElement(AlertDialog.Title, {
    className: "text-primary-tex mb-3 m-0 text-[18px] font-medium"
  }, title), description ? React__default.createElement(AlertDialog.Description, {
    className: "text-secondary-text leading-normal"
  }, description) : null, React__default.createElement("div", {
    className: "flex justify-end gap-3 mt-5"
  }, asyncStatus ? null : React__default.createElement(AlertDialog.Cancel, {
    asChild: true
  }, React__default.createElement(Button$1, {
    type: "button",
    rounded: true,
    onClick: onCancel
  }, React__default.createElement("span", {
    className: "px-4"
  }, cancelLabel))), isControlled ? React__default.createElement(Button$1, Object.assign({
    type: "button",
    rounded: true,
    loading: asyncStatus,
    variant: confirmVariant,
    disabled: asyncStatus,
    onClick: onConfirm
  }, confirmProps), React__default.createElement("span", {
    className: "px-4"
  }, confirmLabel)) : React__default.createElement(AlertDialog.Action, {
    asChild: true
  }, React__default.createElement(Button$1, Object.assign({
    type: "button",
    rounded: true,
    variant: confirmVariant,
    onClick: onConfirm
  }, cancelProps), React__default.createElement("span", {
    className: "px-4"
  }, confirmLabel)))))) : null;
};
Confirm.Trigger = ConfirmTitle;

var _excluded$1 = ["name", "src", "alt", "fallbackDelay", "variant", "background", "color", "width", "height", "className"];
var Avatar = function Avatar(_ref, ref) {
  var name = _ref.name,
    src = _ref.src,
    alt = _ref.alt,
    _ref$fallbackDelay = _ref.fallbackDelay,
    fallbackDelay = _ref$fallbackDelay === void 0 ? 600 : _ref$fallbackDelay,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "circle" : _ref$variant,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? "bg-primary-gray" : _ref$background,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "text-primary-text" : _ref$color,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 42 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 42 : _ref$height,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var _useState = React.useState("idle"),
    isImageLoading = _useState[0],
    setIsImageLoading = _useState[1];
  var handleLoadedChange = function handleLoadedChange(loadingStatus) {
    setIsImageLoading(loadingStatus);
  };
  var modifiedName = name ? name.split(" ").slice(0, 2).map(function (word) {
    return word.charAt(0);
  }).join('').toUpperCase() : "AV";
  return React__default.createElement(RadixAvatar.Root, Object.assign({
    style: {
      width: width + "px",
      height: height + "px"
    },
    className: "relative " + background + " " + color + " inline-flex select-none items-center justify-center overflow-hidden " + (variant === "circle" ? "rounded-full" : "rounded-md") + " align-middle " + className,
    ref: ref
  }, props), React__default.createElement(RadixAvatar.Image, {
    onLoadingStatusChange: handleLoadedChange,
    className: "h-full w-full rounded-full object-cover m-auto text-center",
    src: src,
    alt: alt,
    width: width,
    height: height,
    loading: "lazy"
  }), isImageLoading === "loading" && React__default.createElement(Spinner, {
    size: "xs",
    variant: "primary"
  }), isImageLoading === "error" && React__default.createElement(RadixAvatar.Fallback, {
    className: "leading-1 bg-inhiert text-sm flex h-full w-full items-center justify-center font-medium",
    delayMs: fallbackDelay
  }, modifiedName));
};
var AvatarGroup = function AvatarGroup(props) {
  var children = props.children,
    max = props.max,
    onRestClicked = props.onRestClicked,
    restClassName = props.restClassName,
    _props$width = props.width,
    width = _props$width === void 0 ? 42 : _props$width,
    _props$height = props.height,
    height = _props$height === void 0 ? 42 : _props$height,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "circle" : _props$variant;
  var newChidlren = [].concat(children).splice(0, max);
  var restItemCount = children.length > max ? children.length - max : 0;
  return React__default.createElement("div", {
    className: "inline-flex  items-center w-auto"
  }, React__default.createElement("div", {
    className: "flex items-center justify-center rtl:space-x-reverse -space-x-3"
  }, React__default.Children.map(newChidlren, function (child) {
    return React__default.createElement("div", {
      className: "relative border border-black border-opacity-20 inline-block " + (variant === "circle" ? "rounded-full" : "rounded-md") + " shadow-md"
    }, child);
  })), restItemCount ? React__default.createElement("button", Object.assign({
    type: "button",
    style: {
      width: width + "px",
      height: height + "px"
    },
    className: "flex " + (onRestClicked ? "cursor-pointer hover:underline" : "cursor-default") + " bg-bluish-gray text-mutedColor " + (variant === "circle" ? " rounded-full " : "rounded-md") + " items-center justify-center " + restClassName,
    onClick: function onClick() {
      if (onRestClicked) {
        onRestClicked(restItemCount);
      }
    }
  }, props), React__default.createElement("span", null, "+", restItemCount)) : null);
};
var Avatar$1 = /*#__PURE__*/React__default.forwardRef(Avatar);

var _excluded$2 = ["children", "variant", "modifier", "disabled", "active", "size", "loading", "position", "className"];
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
    props = _objectWithoutPropertiesLoose(_ref2, _excluded$2);
  return React__default.createElement("button", Object.assign({
    ref: ref,
    className: "\n        " + position + " rounded-full overflow-hidden  hover:shadow border active:scale-95 transition-all duration-100 focus:ring-4 focus:ring-gray-200 focus:ring-opacity-30  \n        " + renderVariant$1({
      variant: variant,
      disabled: disabled,
      modifier: modifier,
      active: active
    }) + "\n        \n        " + (loading ? "bg-opacity-50 cursor-not-allowed" : "") + "\n        " + className + "\n      ",
    disabled: loading || disabled
  }, props), React__default.createElement("span", {
    className: renderSize$1(size) + " text-center items-center justify-center inline-flex " + (loading && "opacity-5")
  }, children), loading && React__default.createElement(Spinner, {
    position: "absolute",
    size: "sm"
  }));
};
var IconButton$1 = /*#__PURE__*/React__default.forwardRef(IconButton);

var LoadingLine = function LoadingLine(_ref) {
  var _ref$height = _ref.height,
    height = _ref$height === void 0 ? 2 : _ref$height,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "fixed" : _ref$position,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "primary" : _ref$variant;
  return React__default.createElement("div", {
    className: position + " load-bar top-0 right-0 z-[99999] w-full "
  }, React__default.createElement("span", {
    style: {
      height: height + "px"
    },
    className: "animate-loadingbar absolute inline h-full w-0 bg-" + variant + " rounded-full overflow-hidden"
  }));
};

var _excluded$3 = ["onClick"];
var CloseButton = function CloseButton(_ref, ref) {
  var onClick = _ref.onClick,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  return React__default.createElement(IconButton$1, Object.assign({
    ref: ref,
    type: "button",
    variant: "default",
    "area-labelly": "dismiss",
    size: "xs",
    onClick: onClick
  }, props), React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-4 h-4 opacity-60 hover:opacity-90"
  }, React__default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  })));
};
var CloseButton$1 = /*#__PURE__*/React__default.forwardRef(CloseButton);

var _excluded$4 = ["children", "size", "closable", "title", "headerBackground", "isTitleCentered", "description", "open", "fullheight"];
// helper function
var renderSize$2 = function renderSize(size) {
  switch (size) {
    case "xs":
      return "w-[96%] md:w-80";
    case "sm":
      return "w-4/5 md:w-[520px]";
    case "lg":
      return "w-[96%] md:w-[795px]";
    case "xl":
      return "w-[96%] md:w-[1024px]";
    case "fullwidth":
      return "w-screen h-screen";
    // md
    default:
      return "w-[96%] md:w-[640px]";
  }
};
// main compoent
var Modal = function Modal(_ref) {
  var children = _ref.children,
    _ref$modal = _ref.modal,
    modal = _ref$modal === void 0 ? true : _ref$modal,
    open = _ref.open,
    onChange = _ref.onChange,
    defaultOpen = _ref.defaultOpen;
  // A component can be considered controlled when its value prop is
  // not undefined.
  var isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  var hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  var _useState = React.useState(hasDefaultOpen ? defaultOpen : false),
    internalOpen = _useState[0],
    setInternalOpen = _useState[1];
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  var isOpen = isControlled ? open : internalOpen;
  var onOpenChange = function onOpenChange(opened) {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return React__default.createElement(Dialog.Root, {
    modal: modal,
    open: isOpen,
    onOpenChange: onOpenChange
  }, children);
};
var ModalTrigger = function ModalTrigger(_ref2) {
  var children = _ref2.children,
    _ref2$asChild = _ref2.asChild,
    asChild = _ref2$asChild === void 0 ? true : _ref2$asChild;
  return React__default.createElement(Dialog.Trigger, {
    asChild: asChild
  }, children);
};
var ModalContent = function ModalContent(_ref3) {
  var children = _ref3.children,
    _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? "md" : _ref3$size,
    _ref3$closable = _ref3.closable,
    closable = _ref3$closable === void 0 ? true : _ref3$closable,
    title = _ref3.title,
    _ref3$headerBackgroun = _ref3.headerBackground,
    headerBackground = _ref3$headerBackgroun === void 0 ? "bg-transparent" : _ref3$headerBackgroun,
    _ref3$isTitleCentered = _ref3.isTitleCentered,
    isTitleCentered = _ref3$isTitleCentered === void 0 ? true : _ref3$isTitleCentered,
    description = _ref3.description,
    open = _ref3.open,
    _ref3$fullheight = _ref3.fullheight,
    fullheight = _ref3$fullheight === void 0 ? false : _ref3$fullheight,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded$4);
  return React__default.createElement(framerMotion.AnimatePresence, null, open ? React__default.createElement(Dialog.Portal, {
    forceMount: true
  }, React__default.createElement("div", {
    className: "fixed inset-0 overflow-y-auto z-30 h-screen"
  }, React__default.createElement(Dialog.Overlay, {
    asChild: true
  }, React__default.createElement(framerMotion.motion.div, {
    key: "modal-" + new Date().toDateString(),
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      opacity: {
        duration: 0.2
      },
      duration: 0.3,
      type: "linear"
    },
    exit: {
      opacity: 0
    }
  }, React__default.createElement(Backdrop$1, null))), React__default.createElement(framerMotion.motion.div, {
    key: "modal-" + new Date().toDateString(),
    initial: {
      opacity: 0,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      opacity: {
        duration: 0.2
      },
      duration: 0.3,
      type: "cubic-bezier(0.16, 1, 0.3, 1)"
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    className: "flex w-full h-full items-center justify-center"
  }, React__default.createElement("div", {
    className: "flex w-full h-full items-center justify-center"
  }, React__default.createElement(Dialog.Content, Object.assign({
    forceMount: true,
    onEscapeKeyDown: function onEscapeKeyDown(event) {
      return event.preventDefault();
    },
    onInteractOutside: function onInteractOutside(event) {
      return event.preventDefault();
    },
    className: renderSize$2(size) + " relative flex flex-col  overflow-hidden " + (size !== "fullwidth" ? "rounded-2xl " : " max-h-screen") + " bg-card-bg-color " + (fullheight ? "h-[calc(100vh-50px)]" : "max-h-[calc(100vh-50px)]") + " shadow-overlap-shadow"
  }, props), closable && React__default.createElement(Dialog.Close, {
    asChild: true
  }, React__default.createElement("div", {
    className: "absolute z-1 ltr:right-4 rtl:left-4 top-4"
  }, React__default.createElement(CloseButton$1, null))), title && React__default.createElement("header", {
    className: "flex-none " + headerBackground + " bg-opacity-80 px-6 py-5 border-b border-border-color border-opacity-40 " + (isTitleCentered ? "text-center" : "")
  }, React__default.createElement(Dialog.Title, {
    className: "text-lg font-medium leading-6 text-primary-text " + (isTitleCentered ? "text-center" : "")
  }, title), description && React__default.createElement(Dialog.Description, {
    className: "text-sm text-secondary-text mt-1"
  }, description)), React__default.createElement("section", {
    className: "flex-auto overflow-auto " + (size !== "fullwidth" ? "max-h-[calc(100vh-100px)]" : "h-full") + "  min-h-[100px] relative"
  }, children)))))) : null);
};
var ModalClose = function ModalClose(_ref4) {
  var children = _ref4.children;
  return React__default.createElement(Dialog.Close, {
    asChild: true,
    "aria-label": "close"
  }, children);
};
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Close = ModalClose;

var Divider = function Divider(_ref) {
  var height = _ref.height,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation;
  var verticalHeight = orientation === "vertical" ? height ? height : "data-[orientation=vertical]:h-full" : "data-[orientation=vertical]:h-full";
  return React__default.createElement(Separator.Root, {
    decorative: true,
    orientation: orientation,
    className: "bg-border-color data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full " + verticalHeight + " data-[orientation=vertical]:w-px"
  });
};

var renderVariant$2 = function renderVariant(variant) {
  switch (variant) {
    case "primary":
      return "bg-primary/20 text-primary";
    case "success":
      return "bg-success/20 text-success";
    case "error":
      return "bg-error/20 text-error";
    default:
      return "bg-primary-gray text-primary-text";
  }
};
var Badge = function Badge(_ref, ref) {
  var children = _ref.children,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  return React__default.createElement("span", {
    ref: ref,
    className: "inline-flex items-center rounded-full " + renderVariant$2(variant) + " px-2 py-1 text-xs font-normal ring-1 ring-inset ring-gray-500/10"
  }, children);
};
var Badge$1 = /*#__PURE__*/React__default.forwardRef(Badge);

var _excluded$5 = ["children", "size", "closable", "title", "isTitleCentered", "description", "side", "open"];
var renderDirection = function renderDirection(dir) {
  switch (dir) {
    case "left":
      return "left-0 pr-10 inset-y-0 max-w-full h-screen pr-7 md:pr-20";
    case "top":
      return "top-0 pb-10 inset-x-0 max-h-full";
    case "bottom":
      return "bottom-0 pt-10 inset-x-0 max-h-full";
    // right is default
    default:
      return "right-0 inset-y-0 max-w-full h-screen pl-7 md:pl-20 ";
  }
};
var renderSize$3 = function renderSize(size, dir) {
  switch (size) {
    case "xs":
      return dir === "top" || dir === "bottom" ? "md:h-80  w-full" : "w-screen md:w-80";
    case "sm":
      return dir === "top" || dir === "bottom" ? "md:h-96  w-full" : "w-screen md:w-96";
    case "lg":
      return dir === "top" || dir === "bottom" ? "md:h-auto  w-full" : "w-screen md:w-[940px]";
    case "xl":
      return dir === "top" || dir === "bottom" ? "md:h-auto w-full" : "w-screen md:w-[1220px]";
    case "fullwidth":
      return dir === "top" || dir === "bottom" ? "h-screen w-full" : "w-screen";
    // md
    default:
      return dir === "top" || dir === "bottom" ? " w-full md:h-auto" : "w-screen md:w-[640px]";
  }
};
var from = function from(dir) {
  switch (dir) {
    case "right":
      return {
        opacity: 0,
        x: "100%"
      };
    case "left":
      return {
        opacity: 0,
        x: "-100%"
      };
    case "top":
      return {
        opacity: 0,
        y: "-100%"
      };
    default:
      return {
        opacity: 0,
        y: "100%"
      };
  }
};
var to = function to(dir) {
  switch (dir) {
    case "right":
      return {
        opacity: 1,
        x: 0
      };
    case "left":
      return {
        opacity: 1,
        x: 0
      };
    case "top":
      return {
        opacity: 1,
        y: 0
      };
    default:
      return {
        opacity: 1,
        y: 0
      };
  }
};
// main compoent
var Drawer = function Drawer(_ref) {
  var children = _ref.children,
    _ref$modal = _ref.modal,
    modal = _ref$modal === void 0 ? false : _ref$modal,
    open = _ref.open,
    onChange = _ref.onChange,
    defaultOpen = _ref.defaultOpen;
  // A component can be considered controlled when its value prop is
  // not undefined.
  var isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  var hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  var _useState = React.useState(hasDefaultOpen ? defaultOpen : false),
    internalOpen = _useState[0],
    setInternalOpen = _useState[1];
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  var isOpen = isControlled ? open : internalOpen;
  var onOpenChange = function onOpenChange(opened) {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return React__default.createElement(Dialog.Root, {
    modal: modal,
    open: isOpen,
    onOpenChange: onOpenChange
  }, children);
};
var DrawerTrigger = function DrawerTrigger(_ref2) {
  var children = _ref2.children;
  return React__default.createElement(Dialog.Trigger, {
    asChild: true
  }, children);
};
var ModalContent$1 = function ModalContent(_ref3) {
  var children = _ref3.children,
    _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? "md" : _ref3$size,
    _ref3$closable = _ref3.closable,
    closable = _ref3$closable === void 0 ? true : _ref3$closable,
    title = _ref3.title,
    _ref3$isTitleCentered = _ref3.isTitleCentered,
    isTitleCentered = _ref3$isTitleCentered === void 0 ? true : _ref3$isTitleCentered,
    description = _ref3.description,
    _ref3$side = _ref3.side,
    side = _ref3$side === void 0 ? "right" : _ref3$side,
    open = _ref3.open,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded$5);
  return React__default.createElement(framerMotion.AnimatePresence, null, open ? React__default.createElement(Dialog.Portal, {
    forceMount: true
  }, React__default.createElement("div", {
    className: "fixed inset-0 overflow-y-auto z-30 h-screen"
  }, React__default.createElement(framerMotion.motion.div, {
    key: "modal-" + new Date().toDateString(),
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      opacity: {
        duration: 0.2
      },
      duration: 0.4,
      type: "ease-in-out"
    },
    exit: {
      opacity: 0
    }
  }, React__default.createElement(Backdrop$1, null)), React__default.createElement(framerMotion.motion.div, {
    key: new Date().toDateString(),
    initial: from(side),
    animate: to(side),
    transition: {
      opacity: {
        duration: 0.3
      },
      duration: 0.2,
      type: "ease-in-out"
    },
    exit: from(side),
    className: "fixed  " + renderDirection(side) + " flex  items-center justify-center"
  }, React__default.createElement(Dialog.Content, Object.assign({
    onEscapeKeyDown: function onEscapeKeyDown(event) {
      return event.preventDefault();
    },
    onInteractOutside: function onInteractOutside(event) {
      return event.preventDefault();
    },
    className: "relative  " + renderSize$3(size, side) + " bg-card-bg-color  flex flex-col h-screen shadow-[0_0_5px_1px_rgba(0,0,0,.15)] pointer-events-auto"
  }, props), closable && React__default.createElement(Dialog.Close, {
    asChild: true
  }, React__default.createElement("div", {
    className: "absolute z-[99] ltr:right-4 rtl:left-4 top-4"
  }, React__default.createElement(CloseButton$1, null))), title && React__default.createElement("header", {
    className: "flex-none bg-opacity-80 px-6 py-5 border-b border-border-color border-opacity-40 " + (isTitleCentered ? "text-center" : "")
  }, React__default.createElement(Dialog.Title, {
    className: "text-lg font-medium leading-6 text-primary-text " + (isTitleCentered ? "text-center" : "")
  }, title), description && React__default.createElement(Dialog.Description, {
    className: "text-sm text-secondary-text mt-1"
  }, description)), React__default.createElement("article", {
    className: "flex-auto min-h-[100px] h-full overflow-auto flex flex-col"
  }, children))))) : null);
};
var DrawerClose = function DrawerClose(_ref4) {
  var children = _ref4.children;
  return React__default.createElement(Dialog.Close, {
    asChild: true
  }, children);
};
Drawer.Trigger = DrawerTrigger;
Drawer.Content = ModalContent$1;
Drawer.Close = DrawerClose;

var Scrollable = function Scrollable(_ref) {
  var children = _ref.children;
  return React__default.createElement(ScrollArea.Root, {
    className: "ScrollAreaRoot"
  }, React__default.createElement(ScrollArea.Viewport, {
    className: "h-full w-full rounded-inhiert"
  }, children), React__default.createElement(ScrollArea.Scrollbar, {
    className: "ScrollAreaScrollbar",
    orientation: "vertical"
  }, React__default.createElement(ScrollArea.Thumb, {
    className: "ScrollAreaThumb"
  })), React__default.createElement(ScrollArea.Scrollbar, {
    className: "ScrollAreaScrollbar",
    orientation: "horizontal"
  }, React__default.createElement(ScrollArea.Thumb, {
    className: "ScrollAreaThumb"
  })), React__default.createElement(ScrollArea.Corner, {
    className: "ScrollAreaCorner"
  }));
};

var _excluded$6 = ["children", "disabled"],
  _excluded2 = ["side", "sideOffset", "align", "alignOffset", "title", "onDismissClicked", "width", "children", "closeable", "collisionPadding", "headerPresent"],
  _excluded3 = ["icon", "text", "descraption", "children"];
var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
    modal = _ref.modal,
    dir = _ref.dir,
    open = _ref.open,
    onChange = _ref.onChange,
    defaultOpen = _ref.defaultOpen;
  // A component can be considered controlled when its value prop is
  // not undefined.
  var isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  var hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  var _useState = React.useState(hasDefaultOpen ? defaultOpen : false),
    internalOpen = _useState[0],
    setInternalOpen = _useState[1];
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  var isOpen = isControlled ? open : internalOpen;
  var onOpenChange = function onOpenChange(opened) {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return React__default.createElement(RadixDropdownMenu.Root, {
    dir: dir,
    modal: modal,
    open: isOpen,
    onOpenChange: onOpenChange
  }, children);
};
var DropdownTrigger = function DropdownTrigger(_ref2) {
  var children = _ref2.children,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    props = _objectWithoutPropertiesLoose(_ref2, _excluded$6);
  return React__default.createElement(RadixDropdownMenu.Trigger, Object.assign({
    asChild: true,
    disabled: disabled
  }, props), children);
};
var DropdownHeader = function DropdownHeader(_ref3) {
  var title = _ref3.title,
    onDismissClicked = _ref3.onDismissClicked,
    closeable = _ref3.closeable;
  return React__default.createElement("header", {
    className: "flex justify-center text-center items-center py-[4px] px-[8px]"
  }, title ? React__default.createElement("p", {
    className: "flex-auto text-opacity-80 relative z-[3] font-medium h-[40px] overflow-hidden px-8 whitespace-nowrap text-ellipsis flex items-center justify-center"
  }, title) : null, closeable ? React__default.createElement(CloseButton$1, {
    onClick: onDismissClicked
  }) : null);
};
var DropdownMenu = function DropdownMenu(_ref4) {
  var _ref4$side = _ref4.side,
    side = _ref4$side === void 0 ? "bottom" : _ref4$side,
    _ref4$sideOffset = _ref4.sideOffset,
    sideOffset = _ref4$sideOffset === void 0 ? 2 : _ref4$sideOffset,
    _ref4$align = _ref4.align,
    align = _ref4$align === void 0 ? "start" : _ref4$align,
    _ref4$alignOffset = _ref4.alignOffset,
    alignOffset = _ref4$alignOffset === void 0 ? 2 : _ref4$alignOffset,
    title = _ref4.title,
    onDismissClicked = _ref4.onDismissClicked,
    children = _ref4.children,
    _ref4$closeable = _ref4.closeable,
    closeable = _ref4$closeable === void 0 ? true : _ref4$closeable,
    _ref4$collisionPaddin = _ref4.collisionPadding,
    collisionPadding = _ref4$collisionPaddin === void 0 ? 10 : _ref4$collisionPaddin,
    _ref4$headerPresent = _ref4.headerPresent,
    headerPresent = _ref4$headerPresent === void 0 ? false : _ref4$headerPresent,
    props = _objectWithoutPropertiesLoose(_ref4, _excluded2);
  return React__default.createElement(RadixDropdownMenu.Portal, null, React__default.createElement(RadixDropdownMenu.Content, {
    asChild: true,
    loop: true,
    side: side,
    sideOffset: sideOffset,
    align: align,
    alignOffset: alignOffset,
    collisionPadding: collisionPadding,
    "data-header-present": headerPresent
  }, React__default.createElement(framerMotion.motion.div, Object.assign({
    className: "min-w-full dropdown-menu-wrapper max-w-[370px] will-change-auto z-30 overflow-auto rounded-lg bg-card-bg-color shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none",
    style: {
      minWidth: "var(--radix-dropdown-menu-trigger-width)"
    },
    key: new Date().toDateString(),
    initial: {
      opacity: 0,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      opacity: {
        duration: 0.3
      },
      duration: 0.4,
      type: "spring"
    },
    exit: {
      opacity: 0,
      scale: 0.95
    }
  }, props), title ? React__default.createElement(DropdownHeader, {
    closeable: closeable,
    title: title,
    onDismissClicked: onDismissClicked
  }) : null, React__default.createElement(Scrollable, null, React__default.createElement("div", {
    className: "dropdown-menu-content"
  }, children)))));
};
var DropdownMenuGroup = function DropdownMenuGroup(_ref5) {
  var children = _ref5.children,
    title = _ref5.title,
    subtitle = _ref5.subtitle;
  return React__default.createElement(RadixDropdownMenu.Group, {
    asChild: true
  }, React__default.createElement("div", {
    className: "" + (title ? "pt-5 pb-1" : "py-1")
  }, title && React__default.createElement("div", {
    className: "mb-1 px-4"
  }, React__default.createElement("p", {
    className: "text-opacity-80 relative z-[3] font-medium overflow-hidden whitespace-nowrap text-ellipsis "
  }, title), React__default.createElement("span", {
    className: "text-secondary-text text-xs"
  }, subtitle)), children));
};
var DropdownMenuItem = function DropdownMenuItem(_ref6) {
  var text = _ref6.text,
    icon = _ref6.icon,
    descraption = _ref6.descraption,
    active = _ref6.active,
    _ref6$disabled = _ref6.disabled,
    disabled = _ref6$disabled === void 0 ? false : _ref6$disabled,
    onSelect = _ref6.onSelect,
    children = _ref6.children;
  return React__default.createElement(RadixDropdownMenu.Item, {
    disabled: disabled,
    onSelect: onSelect,
    asChild: true
  }, React__default.createElement("div", {
    className: "group w-full relative text-primary-text cursor-pointer data-[highlighted]:bg-primary-gray data-[disabled]:cursor-not-allowed data-[disabled]:text-secondary-text flex flex-col w-full px-4 py-3  outline-0\n         " + (active ? "bg-primary-gray" : "") + "  \n      "
  }, React__default.createElement("span", {
    className: "flex w-full items-center gap-2",
    style: {
      direction: "inherit"
    }
  }, icon && React__default.createElement("span", {
    className: "item-icon data-[highlighted]:bg-primary-gray"
  }, icon), React__default.createElement("span", null, text)), descraption && React__default.createElement("span", {
    className: "text-xs " + (active ? "text-white text-opacity-70" : "text-secondary-text")
  }, descraption), children && React__default.createElement("span", {
    className: "block"
  }, children)));
};
var DropdownMenuItemButton = function DropdownMenuItemButton(_ref7, ref) {
  var icon = _ref7.icon,
    text = _ref7.text,
    descraption = _ref7.descraption,
    children = _ref7.children,
    props = _objectWithoutPropertiesLoose(_ref7, _excluded3);
  return React__default.createElement("button", Object.assign({
    ref: ref,
    className: "w-full cursor-pointer hover:bg-primary-gray relative text-primary-text cursor-pointer data-[highlighted]:bg-primary-gray data-[disabled]:cursor-not-allowed data-[disabled]:text-secondary-text flex flex-col w-full px-4 py-3  outline-0"
  }, props), React__default.createElement("span", {
    className: "flex w-full items-center gap-2",
    style: {
      direction: "inherit"
    }
  }, icon && React__default.createElement("span", {
    className: "item-icon data-[highlighted]:bg-primary-gray"
  }, icon), React__default.createElement("span", null, text)), descraption && React__default.createElement("span", {
    className: "text-xstext-secondary-text"
  }, descraption), children && React__default.createElement("span", {
    className: "block"
  }, children));
};
var DropdownDivider = function DropdownDivider() {
  return React__default.createElement(RadixDropdownMenu.Separator, {
    className: "my-1 block w-full bg-secondary-gray h-[1px]"
  });
};
// alises
Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Header = DropdownHeader;
Dropdown.Group = DropdownMenuGroup;
Dropdown.Item = DropdownMenuItem;
Dropdown.Button = /*#__PURE__*/React__default.forwardRef(DropdownMenuItemButton);
Dropdown.Divier = DropdownDivider;

var _excluded$7 = ["children", "side", "sideOffset", "align", "alignOffset", "width", "collisionPadding"];
var HoverCard = function HoverCard(_ref) {
  var children = _ref.children,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 200 : _ref$delay;
  return React__default.createElement(RadixHoverCard.Root, {
    openDelay: delay
  }, children);
};
var HoverCardTrigger = function HoverCardTrigger(_ref2) {
  var children = _ref2.children;
  return React__default.createElement(RadixHoverCard.Trigger, {
    asChild: true
  }, children);
};
var HoverCardContent = function HoverCardContent(_ref3) {
  var children = _ref3.children,
    _ref3$side = _ref3.side,
    side = _ref3$side === void 0 ? "top" : _ref3$side,
    _ref3$sideOffset = _ref3.sideOffset,
    sideOffset = _ref3$sideOffset === void 0 ? 2 : _ref3$sideOffset,
    _ref3$align = _ref3.align,
    align = _ref3$align === void 0 ? "start" : _ref3$align,
    _ref3$alignOffset = _ref3.alignOffset,
    alignOffset = _ref3$alignOffset === void 0 ? 2 : _ref3$alignOffset,
    _ref3$width = _ref3.width,
    width = _ref3$width === void 0 ? 'w-[300px]' : _ref3$width,
    _ref3$collisionPaddin = _ref3.collisionPadding,
    collisionPadding = _ref3$collisionPaddin === void 0 ? 10 : _ref3$collisionPaddin,
    props = _objectWithoutPropertiesLoose(_ref3, _excluded$7);
  return React__default.createElement(RadixHoverCard.Portal, null, React__default.createElement(RadixHoverCard.Content, {
    side: side,
    align: align,
    alignOffset: alignOffset,
    sideOffset: sideOffset,
    collisionPadding: collisionPadding,
    asChild: true
  }, React__default.createElement("div", Object.assign({
    className: " card-hover-wrapper overflow-hidden text-sm " + width + " z-30  rounded-lg bg-white shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none"
  }, props), children, React__default.createElement(RadixHoverCard.Arrow, {
    className: "fill-white"
  }))));
};
HoverCard.Trigger = HoverCardTrigger;
HoverCard.Content = HoverCardContent;

var _excluded$8 = ["children", "title", "side", "sideOffset", "align", "alignOffset", "collisionPadding", "headerPresent", "width"];
var Popover = function Popover(_ref) {
  var children = _ref.children,
    modal = _ref.modal,
    open = _ref.open,
    onChange = _ref.onChange,
    defaultOpen = _ref.defaultOpen;
  // A component can be considered controlled when its value prop is
  // not undefined.
  var isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  var hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  var _useState = React.useState(hasDefaultOpen ? defaultOpen : false),
    internalOpen = _useState[0],
    setInternalOpen = _useState[1];
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  var isOpen = isControlled ? open : internalOpen;
  var onOpenChange = function onOpenChange(opened) {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return React__default.createElement(RadixPopover.Root, {
    modal: modal,
    open: isOpen,
    onOpenChange: onOpenChange
  }, children);
};
var PopoverTrigger = function PopoverTrigger(_ref2) {
  var children = _ref2.children;
  return React__default.createElement(RadixPopover.Trigger, {
    asChild: true
  }, children);
};
var PopoverHeader = function PopoverHeader(_ref3) {
  var title = _ref3.title;
  return React__default.createElement("header", {
    className: "flex justify-center text-center items-center py-[4px] px-[8px]"
  }, React__default.createElement("div", {
    className: "flex-auto  relative z-[3] text-lg font-medium leading-6 text-primary-text  h-[40px] overflow-hidden px-8 whitespace-nowrap text-ellipsis flex items-center justify-center"
  }, title), React__default.createElement(RadixPopover.Close, {
    asChild: true,
    "aria-label": "Close"
  }, React__default.createElement(CloseButton$1, null)));
};
var PopoverContent = function PopoverContent(_ref4) {
  var children = _ref4.children,
    title = _ref4.title,
    _ref4$side = _ref4.side,
    side = _ref4$side === void 0 ? "bottom" : _ref4$side,
    _ref4$sideOffset = _ref4.sideOffset,
    sideOffset = _ref4$sideOffset === void 0 ? 2 : _ref4$sideOffset,
    _ref4$align = _ref4.align,
    align = _ref4$align === void 0 ? "center" : _ref4$align,
    _ref4$alignOffset = _ref4.alignOffset,
    alignOffset = _ref4$alignOffset === void 0 ? 2 : _ref4$alignOffset,
    _ref4$collisionPaddin = _ref4.collisionPadding,
    collisionPadding = _ref4$collisionPaddin === void 0 ? 10 : _ref4$collisionPaddin,
    _ref4$headerPresent = _ref4.headerPresent,
    headerPresent = _ref4$headerPresent === void 0 ? false : _ref4$headerPresent,
    _ref4$width = _ref4.width,
    width = _ref4$width === void 0 ? "w-56" : _ref4$width,
    props = _objectWithoutPropertiesLoose(_ref4, _excluded$8);
  return React__default.createElement(RadixPopover.Portal, null, React__default.createElement(RadixPopover.Content, {
    side: side,
    sideOffset: sideOffset,
    align: align,
    alignOffset: alignOffset,
    asChild: true,
    collisionPadding: collisionPadding,
    "data-header-present": headerPresent
  }, React__default.createElement(framerMotion.motion.div, Object.assign({
    key: new Date().toDateString(),
    initial: {
      opacity: 0,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      opacity: {
        duration: 0.1
      },
      duration: 0.2,
      type: "linear"
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    className: "popover-wrapper " + width + " z-30 overflow-hidden rounded-xl bg-card-bg-color shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none"
  }, props), title ? React__default.createElement(PopoverHeader, {
    title: title
  }) : null, React__default.createElement(Scrollable, null, React__default.createElement("div", {
    className: "popover-content px-5 py-5"
  }, children)), React__default.createElement(RadixPopover.Arrow, {
    className: "fill-white"
  }))));
};
Popover.Trigger = PopoverTrigger;
Popover.Header = PopoverHeader;
Popover.Content = PopoverContent;

exports.Avatar = Avatar$1;
exports.AvatarGroup = AvatarGroup;
exports.Backdrop = Backdrop$1;
exports.Badge = Badge$1;
exports.Button = Button$1;
exports.Confirm = Confirm;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.Dropdown = Dropdown;
exports.HoverCard = HoverCard;
exports.IconButton = IconButton$1;
exports.LoadingLine = LoadingLine;
exports.Modal = Modal;
exports.Popover = Popover;
exports.Spinner = Spinner;
//# sourceMappingURL=rohan-react.cjs.development.js.map
