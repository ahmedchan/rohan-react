import React, { useState } from 'react';
import { Root, Portal, Overlay, Content, Title, Description, Cancel, Action, Trigger } from '@radix-ui/react-alert-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import classnames from 'classnames';
import { Root as Root$1, Image, Fallback } from '@radix-ui/react-avatar';
import { Root as Root$2, Trigger as Trigger$1, Portal as Portal$1, Overlay as Overlay$1, Content as Content$1, Close, Title as Title$1, Description as Description$1 } from '@radix-ui/react-dialog';
import { Root as Root$3 } from '@radix-ui/react-separator';
import { Root as Root$5, Trigger as Trigger$2, Portal as Portal$2, Content as Content$2, Group, Item, Separator } from '@radix-ui/react-dropdown-menu';
import { Root as Root$4, Viewport, Scrollbar, Thumb, Corner } from '@radix-ui/react-scroll-area';
import { Root as Root$6, Trigger as Trigger$3, Portal as Portal$3, Content as Content$3, Arrow } from '@radix-ui/react-hover-card';
import { Root as Root$7, Trigger as Trigger$4, Close as Close$1, Portal as Portal$4, Content as Content$4, Arrow as Arrow$1 } from '@radix-ui/react-popover';

const Backdrop = (_ref, ref) => {
  let {
    variant = "white",
    style
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "backdrop",
    className: `fixed  inset-0 block`,
    style: {
      backgroundColor: variant === "white" ? "var(--backdrop-light-color)" : "var(--backdrop-dark-color)",
      ...style
    }
  });
};
var Backdrop$1 = /*#__PURE__*/React.forwardRef(Backdrop);

const renderColor = color => {
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
const renderAlign = align => {
  switch (align) {
    case "left":
      return "justify-start";
    case "right":
      return "justify-end";
    default:
      return "justify-center";
  }
};
const renderSize = size => {
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
const renderPosition = position => {
  switch (position) {
    case "absolute":
      return "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    case "blockScreen":
      return "fixed inset-0 flex items-center justify-center ";
    default:
      return "static";
  }
};
const Spinner = _ref => {
  let {
    size = "md",
    align = "center",
    position = "static",
    variant = "default"
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: `${renderPosition(position)} dark:bg-[#3b3b40]`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${renderAlign(align)} flex items-center`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${renderSize(size)} animate-spin rounded-full border-b-2 ${renderColor(variant)}`
  })));
};

const renderVariant = _ref => {
  let {
    variant,
    disabled,
    modifier,
    active
  } = _ref;
  if (disabled) return "bg-transparent border-0 dark:bg-primary-gray dark:border-secondary-gray dark:text-muted-text tex-muted-text cursor-not-allowed hover:enabled:shadow-none text-secondary-text";
  switch (variant) {
    case "primary":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-primary ";
      } else if (modifier === "outline") {
        return `${active ? "bg-primary/10 text-primary" : "bg-transparent border-primary text-primary"} hover:bg-primary/5`;
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
        return `${active ? "bg-primary text-white" : "bg-transparent text-black"}`;
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
const Button = (_ref2, ref) => {
  let {
    children,
    variant = "default",
    modifier = "",
    disabled = false,
    active = false,
    size = "md",
    fullwidth = false,
    loading = false,
    rounded = false,
    className = "",
    ...props
  } = _ref2;
  const sizes = {
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
  return /*#__PURE__*/React.createElement("button", Object.assign({
    ref: ref,
    disabled: disabled || loading,
    className: `
        relative group uppercase whitespace-nowrap text-center px-3 outline-none transition-all duration-100 active:enabled:scale-95 ${fullwidth ? "flex w-full" : "inline-flex"} gap-2 items-center justify-center hover:enabled:shadow border focus:ring-4 focus:ring-gray-200 focus:ring-opacity-30 
        ${renderVariant({
      variant,
      disabled,
      modifier,
      active
    })}
        ${sizes[size]}
        ${rounded ? "rounded-full" : "rounded-md"}
        ${loading ? "bg-opacity-60 cursor-not-allowed" : ""}
        ${className}
      `
  }, props), /*#__PURE__*/React.createElement("span", {
    className: classnames("inline-flex items-center gap-2 ", loading && "opacity-5")
  }, children), loading && /*#__PURE__*/React.createElement(Spinner, {
    position: "absolute",
    size: "sm"
  }));
};
var Button$1 = /*#__PURE__*/React.forwardRef(Button);

const Confirm = _ref => {
  let {
    title = "أنت متيقن من تنفيذ الطلب؟",
    description = "بمجرد اتخاذك لهذا الاجراء, لا يمكنك العوده.",
    onConfirm,
    onCancel,
    confirmLabel = "تأكيد",
    confirmVariant = "black",
    cancelLabel = "إلغاء",
    children,
    asyncStatus = false,
    open,
    onChange,
    defaultOpen,
    confirmProps,
    cancelProps
  } = _ref;
  // A component can be considered controlled when its value prop is
  // not undefined.
  const isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  const hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  const [internalOpen, setInternalOpen] = useState(hasDefaultOpen ? defaultOpen : false);
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  const isOpen = isControlled ? open : internalOpen;
  const onOpenChange = opened => {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return /*#__PURE__*/React.createElement(Root, {
    open: isOpen,
    onOpenChange: onOpenChange
  }, children, /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 overflow-y-auto z-30 h-screen"
  }, /*#__PURE__*/React.createElement(Overlay, {
    asChild: true
  }, /*#__PURE__*/React.createElement(motion.div, {
    key: `modal-${new Date().toDateString()}`,
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
  }, /*#__PURE__*/React.createElement(Backdrop$1, null))), /*#__PURE__*/React.createElement(AnimatePresence, null, /*#__PURE__*/React.createElement(ConfirmContent, {
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
const ConfirmTitle = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(Trigger, {
    asChild: true
  }, children);
};
const ConfirmContent = _ref3 => {
  let {
    title,
    description,
    confirmLabel,
    confirmVariant,
    cancelLabel,
    onConfirm,
    onCancel,
    asyncStatus,
    isControlled,
    isOpen,
    confirmProps,
    cancelProps
  } = _ref3;
  return isOpen ? ( /*#__PURE__*/React.createElement(motion.div, {
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
  }, /*#__PURE__*/React.createElement(Content, {
    onEscapeKeyDown: event => event.preventDefault(),
    forceMount: true,
    className: " fixed top-8 left-[50%] -ml-[220px]  w-[440px] rounded-xl bg-card-bg-color p-5 shadow-overlap-shadow focus:outline-none"
  }, /*#__PURE__*/React.createElement(Title, {
    className: "text-primary-tex mb-3 m-0 text-[18px] font-medium"
  }, title), description ? ( /*#__PURE__*/React.createElement(Description, {
    className: "text-secondary-text leading-normal"
  }, description)) : null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-3 mt-5"
  }, asyncStatus ? null : ( /*#__PURE__*/React.createElement(Cancel, {
    asChild: true
  }, /*#__PURE__*/React.createElement(Button$1, {
    type: "button",
    rounded: true,
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4"
  }, cancelLabel)))), isControlled ? ( /*#__PURE__*/React.createElement(Button$1, Object.assign({
    type: "button",
    rounded: true,
    loading: asyncStatus,
    variant: confirmVariant,
    disabled: asyncStatus,
    onClick: onConfirm
  }, confirmProps), /*#__PURE__*/React.createElement("span", {
    className: "px-4"
  }, confirmLabel))) : ( /*#__PURE__*/React.createElement(Action, {
    asChild: true
  }, /*#__PURE__*/React.createElement(Button$1, Object.assign({
    type: "button",
    rounded: true,
    variant: confirmVariant,
    onClick: onConfirm
  }, cancelProps), /*#__PURE__*/React.createElement("span", {
    className: "px-4"
  }, confirmLabel)))))))) : null;
};
Confirm.Trigger = ConfirmTitle;

const Avatar = (_ref, ref) => {
  let {
    name,
    src,
    alt,
    fallbackDelay = 600,
    variant = "circle",
    background = "bg-primary-gray",
    color = "text-primary-text",
    width = 42,
    height = 42,
    className = "",
    ...props
  } = _ref;
  const [isImageLoading, setIsImageLoading] = useState("idle");
  const handleLoadedChange = loadingStatus => {
    setIsImageLoading(loadingStatus);
  };
  const modifiedName = name ? name.split(" ").slice(0, 2).map(word => word.charAt(0)).join('').toUpperCase() : "AV";
  return /*#__PURE__*/React.createElement(Root$1, Object.assign({
    style: {
      width: width + "px",
      height: height + "px"
    },
    className: `relative ${background} ${color} inline-flex select-none items-center justify-center overflow-hidden ${variant === "circle" ? "rounded-full" : "rounded-md"} align-middle ${className}`,
    ref: ref
  }, props), /*#__PURE__*/React.createElement(Image, {
    onLoadingStatusChange: handleLoadedChange,
    className: "h-full w-full rounded-full object-cover m-auto text-center",
    src: src,
    alt: alt,
    width: width,
    height: height,
    loading: "lazy"
  }), isImageLoading === "loading" && /*#__PURE__*/React.createElement(Spinner, {
    size: "xs",
    variant: "primary"
  }), isImageLoading === "error" && ( /*#__PURE__*/React.createElement(Fallback, {
    className: "leading-1 bg-inhiert text-sm flex h-full w-full items-center justify-center font-medium",
    delayMs: fallbackDelay
  }, modifiedName)));
};
const AvatarGroup = props => {
  const {
    children,
    max,
    onRestClicked,
    restClassName,
    width = 42,
    height = 42,
    variant = "circle"
  } = props;
  const newChidlren = [...children].splice(0, max);
  const restItemCount = children.length > max ? children.length - max : 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "inline-flex  items-center w-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: `flex items-center justify-center rtl:space-x-reverse -space-x-3`
  }, React.Children.map(newChidlren, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: `relative border border-black border-opacity-20 inline-block ${variant === "circle" ? "rounded-full" : "rounded-md"} shadow-md`
    }, child);
  })), restItemCount ? ( /*#__PURE__*/React.createElement("button", Object.assign({
    type: "button",
    style: {
      width: `${width}px`,
      height: `${height}px`
    },
    className: `flex ${onRestClicked ? "cursor-pointer hover:underline" : "cursor-default"} bg-bluish-gray text-mutedColor ${variant === "circle" ? " rounded-full " : "rounded-md"} items-center justify-center ${restClassName}`,
    onClick: () => {
      if (onRestClicked) {
        onRestClicked(restItemCount);
      }
    }
  }, props), /*#__PURE__*/React.createElement("span", null, "+", restItemCount))) : null);
};
var Avatar$1 = /*#__PURE__*/React.forwardRef(Avatar);

const renderVariant$1 = _ref => {
  let {
    variant,
    disabled,
    modifier,
    active
  } = _ref;
  if (disabled) return "bg-gray-100 tex-muted-text cursor-not-allowed hover:shadow-none text-secondary-text";
  switch (variant) {
    case "primary":
      if (modifier === "gosht") {
        return "bg-transparent border-0 text-primary ";
      } else if (modifier === "outline") {
        return `${active ? "bg-primary/10 text-primary" : "bg-transparent border-primary text-primary"} hover:bg-primary/5`;
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
        return `${active ? "bg-primary text-white" : "bg-transparent text-black"}`;
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
const renderSize$1 = size => {
  switch (size) {
    case "xs":
      return `text-[.8rem] w-[30px] h-[30px]`;
    case "sm":
      return `text-sm h-[32px] w-[32px]`;
    case "lg":
      return `text-base h-[44px] w-[44px]`;
    case "xl":
      return `text-lg h-[50px] w-[50]`;
    default:
      return `text-base h-[38px] w-[38px]`;
  }
};
const IconButton = (_ref2, ref) => {
  let {
    children,
    variant = "default",
    modifier,
    disabled = false,
    active = false,
    size = "md",
    loading = false,
    position = "relative",
    className = "",
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("button", Object.assign({
    ref: ref,
    className: `
        ${position} rounded-full overflow-hidden  hover:shadow border active:scale-95 transition-all duration-100 focus:ring-4 focus:ring-gray-200 focus:ring-opacity-30  
        ${renderVariant$1({
      variant,
      disabled,
      modifier,
      active
    })}
        
        ${loading ? "bg-opacity-50 cursor-not-allowed" : ""}
        ${className}
      `,
    disabled: loading || disabled
  }, props), /*#__PURE__*/React.createElement("span", {
    className: `${renderSize$1(size)} text-center items-center justify-center inline-flex ${loading && "opacity-5"}`
  }, children), loading && /*#__PURE__*/React.createElement(Spinner, {
    position: "absolute",
    size: "sm"
  }));
};
var IconButton$1 = /*#__PURE__*/React.forwardRef(IconButton);

const LoadingLine = _ref => {
  let {
    height = 2,
    position = "fixed",
    variant = "primary"
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: `${position} load-bar top-0 right-0 z-[99999] w-full `
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: `${height}px`
    },
    className: `animate-loadingbar absolute inline h-full w-0 bg-${variant} rounded-full overflow-hidden`
  }));
};

const CloseButton = (_ref, ref) => {
  let {
    onClick,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(IconButton$1, Object.assign({
    ref: ref,
    type: "button",
    variant: "default",
    "area-labelly": "dismiss",
    size: "xs",
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-4 h-4 opacity-60 hover:opacity-90"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  })));
};
var CloseButton$1 = /*#__PURE__*/React.forwardRef(CloseButton);

// helper function
const renderSize$2 = size => {
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
const Modal = _ref => {
  let {
    children,
    modal = true,
    open,
    onChange,
    defaultOpen
  } = _ref;
  // A component can be considered controlled when its value prop is
  // not undefined.
  const isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  const hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  const [internalOpen, setInternalOpen] = useState(hasDefaultOpen ? defaultOpen : false);
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  const isOpen = isControlled ? open : internalOpen;
  const onOpenChange = opened => {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return /*#__PURE__*/React.createElement(Root$2, {
    modal: modal,
    open: isOpen,
    onOpenChange: onOpenChange
  }, children);
};
const ModalTrigger = _ref2 => {
  let {
    children,
    asChild = true
  } = _ref2;
  return /*#__PURE__*/React.createElement(Trigger$1, {
    asChild: asChild
  }, children);
};
const ModalContent = _ref3 => {
  let {
    children,
    size = "md",
    closable = true,
    title,
    headerBackground = "bg-transparent",
    isTitleCentered = true,
    description,
    open,
    fullheight = false,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement(AnimatePresence, null, open ? ( /*#__PURE__*/React.createElement(Portal$1, {
    forceMount: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 overflow-y-auto z-30 h-screen"
  }, /*#__PURE__*/React.createElement(Overlay$1, {
    asChild: true
  }, /*#__PURE__*/React.createElement(motion.div, {
    key: `modal-${new Date().toDateString()}`,
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
  }, /*#__PURE__*/React.createElement(Backdrop$1, null))), /*#__PURE__*/React.createElement(motion.div, {
    key: `modal-${new Date().toDateString()}`,
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
  }, /*#__PURE__*/React.createElement("div", {
    className: `flex w-full h-full items-center justify-center`
  }, /*#__PURE__*/React.createElement(Content$1, Object.assign({
    forceMount: true,
    onEscapeKeyDown: event => event.preventDefault(),
    onInteractOutside: event => event.preventDefault(),
    className: `${renderSize$2(size)} relative flex flex-col  overflow-hidden ${size !== "fullwidth" ? "rounded-2xl " : " max-h-screen"} bg-card-bg-color ${fullheight ? "h-[calc(100vh-50px)]" : "max-h-[calc(100vh-50px)]"} shadow-overlap-shadow`
  }, props), closable && ( /*#__PURE__*/React.createElement(Close, {
    asChild: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute z-1 ltr:right-4 rtl:left-4 top-4"
  }, /*#__PURE__*/React.createElement(CloseButton$1, null)))), title && ( /*#__PURE__*/React.createElement("header", {
    className: `flex-none ${headerBackground} bg-opacity-80 px-6 py-5 border-b border-border-color border-opacity-40 ${isTitleCentered ? "text-center" : ""}`
  }, /*#__PURE__*/React.createElement(Title$1, {
    className: `text-lg font-medium leading-6 text-primary-text ${isTitleCentered ? "text-center" : ""}`
  }, title), description && ( /*#__PURE__*/React.createElement(Description$1, {
    className: `text-sm text-secondary-text mt-1`
  }, description)))), /*#__PURE__*/React.createElement("section", {
    className: `flex-auto overflow-auto ${size !== "fullwidth" ? "max-h-[calc(100vh-100px)]" : "h-full"}  min-h-[100px] relative`
  }, children))))))) : null);
};
const ModalClose = _ref4 => {
  let {
    children
  } = _ref4;
  return /*#__PURE__*/React.createElement(Close, {
    asChild: true,
    "aria-label": "close"
  }, children);
};
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Close = ModalClose;

const Divider = _ref => {
  let {
    height,
    orientation = "horizontal"
  } = _ref;
  const verticalHeight = orientation === "vertical" ? height ? height : "data-[orientation=vertical]:h-full" : "data-[orientation=vertical]:h-full";
  return /*#__PURE__*/React.createElement(Root$3, {
    decorative: true,
    orientation: orientation,
    className: `bg-border-color data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full ${verticalHeight} data-[orientation=vertical]:w-px`
  });
};

const renderVariant$2 = variant => {
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
const Badge = (_ref, ref) => {
  let {
    children,
    variant = "default"
  } = _ref;
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: `inline-flex items-center rounded-full ${renderVariant$2(variant)} px-2 py-1 text-xs font-normal ring-1 ring-inset ring-gray-500/10`
  }, children);
};
var Badge$1 = /*#__PURE__*/React.forwardRef(Badge);

const renderDirection = dir => {
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
const renderSize$3 = (size, dir) => {
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
const from = dir => {
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
const to = dir => {
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
const Drawer = _ref => {
  let {
    children,
    modal = false,
    open,
    onChange,
    defaultOpen
  } = _ref;
  // A component can be considered controlled when its value prop is
  // not undefined.
  const isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  const hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  const [internalOpen, setInternalOpen] = useState(hasDefaultOpen ? defaultOpen : false);
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  const isOpen = isControlled ? open : internalOpen;
  const onOpenChange = opened => {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return /*#__PURE__*/React.createElement(Root$2, {
    modal: modal,
    open: isOpen,
    onOpenChange: onOpenChange
  }, children);
};
const DrawerTrigger = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(Trigger$1, {
    asChild: true
  }, children);
};
const ModalContent$1 = _ref3 => {
  let {
    children,
    size = "md",
    closable = true,
    title,
    isTitleCentered = true,
    description,
    side = "right",
    open,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement(AnimatePresence, null, open ? ( /*#__PURE__*/React.createElement(Portal$1, {
    forceMount: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 overflow-y-auto z-30 h-screen"
  }, /*#__PURE__*/React.createElement(motion.div, {
    key: `modal-${new Date().toDateString()}`,
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
  }, /*#__PURE__*/React.createElement(Backdrop$1, null)), /*#__PURE__*/React.createElement(motion.div, {
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
    className: `fixed  ${renderDirection(side)} flex  items-center justify-center`
  }, /*#__PURE__*/React.createElement(Content$1, Object.assign({
    onEscapeKeyDown: event => event.preventDefault(),
    onInteractOutside: event => event.preventDefault(),
    className: `relative  ${renderSize$3(size, side)} bg-card-bg-color  flex flex-col h-screen shadow-[0_0_5px_1px_rgba(0,0,0,.15)] pointer-events-auto`
  }, props), closable && ( /*#__PURE__*/React.createElement(Close, {
    asChild: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[99] ltr:right-4 rtl:left-4 top-4"
  }, /*#__PURE__*/React.createElement(CloseButton$1, null)))), title && ( /*#__PURE__*/React.createElement("header", {
    className: `flex-none bg-opacity-80 px-6 py-5 border-b border-border-color border-opacity-40 ${isTitleCentered ? "text-center" : ""}`
  }, /*#__PURE__*/React.createElement(Title$1, {
    className: `text-lg font-medium leading-6 text-primary-text ${isTitleCentered ? "text-center" : ""}`
  }, title), description && ( /*#__PURE__*/React.createElement(Description$1, {
    className: `text-sm text-secondary-text mt-1`
  }, description)))), /*#__PURE__*/React.createElement("article", {
    className: "flex-auto min-h-[100px] h-full overflow-auto flex flex-col"
  }, children)))))) : null);
};
const DrawerClose = _ref4 => {
  let {
    children
  } = _ref4;
  return /*#__PURE__*/React.createElement(Close, {
    asChild: true
  }, children);
};
Drawer.Trigger = DrawerTrigger;
Drawer.Content = ModalContent$1;
Drawer.Close = DrawerClose;

const Scrollable = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Root$4, {
    className: "ScrollAreaRoot"
  }, /*#__PURE__*/React.createElement(Viewport, {
    className: `h-full w-full rounded-inhiert`
  }, children), /*#__PURE__*/React.createElement(Scrollbar, {
    className: "ScrollAreaScrollbar",
    orientation: "vertical"
  }, /*#__PURE__*/React.createElement(Thumb, {
    className: "ScrollAreaThumb"
  })), /*#__PURE__*/React.createElement(Scrollbar, {
    className: "ScrollAreaScrollbar",
    orientation: "horizontal"
  }, /*#__PURE__*/React.createElement(Thumb, {
    className: "ScrollAreaThumb"
  })), /*#__PURE__*/React.createElement(Corner, {
    className: "ScrollAreaCorner"
  }));
};

const Dropdown = _ref => {
  let {
    children,
    modal,
    dir,
    open,
    onChange,
    defaultOpen
  } = _ref;
  // A component can be considered controlled when its value prop is
  // not undefined.
  const isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  const hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  const [internalOpen, setInternalOpen] = useState(hasDefaultOpen ? defaultOpen : false);
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  const isOpen = isControlled ? open : internalOpen;
  const onOpenChange = opened => {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return /*#__PURE__*/React.createElement(Root$5, {
    dir: dir,
    modal: modal,
    open: isOpen,
    onOpenChange: onOpenChange
  }, children);
};
const DropdownTrigger = _ref2 => {
  let {
    children,
    disabled = false,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(Trigger$2, Object.assign({
    asChild: true,
    disabled: disabled
  }, props), children);
};
const DropdownHeader = _ref3 => {
  let {
    title,
    onDismissClicked,
    closeable
  } = _ref3;
  return /*#__PURE__*/React.createElement("header", {
    className: "flex justify-center text-center items-center py-[4px] px-[8px]"
  }, title ? ( /*#__PURE__*/React.createElement("p", {
    className: "flex-auto text-opacity-80 relative z-[3] font-medium h-[40px] overflow-hidden px-8 whitespace-nowrap text-ellipsis flex items-center justify-center"
  }, title)) : null, closeable ? /*#__PURE__*/React.createElement(CloseButton$1, {
    onClick: onDismissClicked
  }) : null);
};
const DropdownMenu = _ref4 => {
  let {
    side = "bottom",
    sideOffset = 2,
    align = "start",
    alignOffset = 2,
    title,
    onDismissClicked,
    width,
    children,
    closeable = true,
    collisionPadding = 10,
    headerPresent = false,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(Portal$2, null, /*#__PURE__*/React.createElement(Content$2, {
    asChild: true,
    loop: true,
    side: side,
    sideOffset: sideOffset,
    align: align,
    alignOffset: alignOffset,
    collisionPadding: collisionPadding,
    "data-header-present": headerPresent
  }, /*#__PURE__*/React.createElement(motion.div, Object.assign({
    className: `min-w-full dropdown-menu-wrapper max-w-[370px] will-change-auto z-30 overflow-auto rounded-lg bg-card-bg-color shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none`,
    style: {
      minWidth: `var(--radix-dropdown-menu-trigger-width)`
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
  }, props), title ? ( /*#__PURE__*/React.createElement(DropdownHeader, {
    closeable: closeable,
    title: title,
    onDismissClicked: onDismissClicked
  })) : null, /*#__PURE__*/React.createElement(Scrollable, null, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu-content"
  }, children)))));
};
const DropdownMenuGroup = _ref5 => {
  let {
    children,
    title,
    subtitle
  } = _ref5;
  return /*#__PURE__*/React.createElement(Group, {
    asChild: true
  }, /*#__PURE__*/React.createElement("div", {
    className: `${title ? "pt-5 pb-1" : "py-1"}`
  }, title && ( /*#__PURE__*/React.createElement("div", {
    className: "mb-1 px-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-opacity-80 relative z-[3] font-medium overflow-hidden whitespace-nowrap text-ellipsis "
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "text-secondary-text text-xs"
  }, subtitle))), children));
};
const DropdownMenuItem = _ref6 => {
  let {
    text,
    icon,
    descraption,
    active,
    disabled = false,
    onSelect,
    children
  } = _ref6;
  return /*#__PURE__*/React.createElement(Item, {
    disabled: disabled,
    onSelect: onSelect,
    asChild: true
  }, /*#__PURE__*/React.createElement("div", {
    className: `group w-full relative text-primary-text cursor-pointer data-[highlighted]:bg-primary-gray data-[disabled]:cursor-not-allowed data-[disabled]:text-secondary-text flex flex-col w-full px-4 py-3  outline-0
         ${active ? "bg-primary-gray" : ""}  
      `
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex w-full items-center gap-2",
    style: {
      direction: "inherit"
    }
  }, icon && ( /*#__PURE__*/React.createElement("span", {
    className: `item-icon data-[highlighted]:bg-primary-gray`
  }, icon)), /*#__PURE__*/React.createElement("span", null, text)), descraption && ( /*#__PURE__*/React.createElement("span", {
    className: `text-xs ${active ? "text-white text-opacity-70" : "text-secondary-text"}`
  }, descraption)), children && /*#__PURE__*/React.createElement("span", {
    className: "block"
  }, children)));
};
const DropdownMenuItemButton = (_ref7, ref) => {
  let {
    icon,
    text,
    descraption,
    children,
    ...props
  } = _ref7;
  return /*#__PURE__*/React.createElement("button", Object.assign({
    ref: ref,
    className: `w-full cursor-pointer hover:bg-primary-gray relative text-primary-text cursor-pointer data-[highlighted]:bg-primary-gray data-[disabled]:cursor-not-allowed data-[disabled]:text-secondary-text flex flex-col w-full px-4 py-3  outline-0`
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "flex w-full items-center gap-2",
    style: {
      direction: "inherit"
    }
  }, icon && ( /*#__PURE__*/React.createElement("span", {
    className: `item-icon data-[highlighted]:bg-primary-gray`
  }, icon)), /*#__PURE__*/React.createElement("span", null, text)), descraption && ( /*#__PURE__*/React.createElement("span", {
    className: `text-xstext-secondary-text`
  }, descraption)), children && /*#__PURE__*/React.createElement("span", {
    className: "block"
  }, children));
};
const DropdownDivider = () => ( /*#__PURE__*/React.createElement(Separator, {
  className: "my-1 block w-full bg-secondary-gray h-[1px]"
}));
// alises
Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Header = DropdownHeader;
Dropdown.Group = DropdownMenuGroup;
Dropdown.Item = DropdownMenuItem;
Dropdown.Button = /*#__PURE__*/React.forwardRef(DropdownMenuItemButton);
Dropdown.Divier = DropdownDivider;

const HoverCard = _ref => {
  let {
    children,
    delay = 200
  } = _ref;
  return /*#__PURE__*/React.createElement(Root$6, {
    openDelay: delay
  }, children);
};
const HoverCardTrigger = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(Trigger$3, {
    asChild: true
  }, children);
};
const HoverCardContent = _ref3 => {
  let {
    children,
    side = "top",
    sideOffset = 2,
    align = "start",
    alignOffset = 2,
    width = 'w-[300px]',
    collisionPadding = 10,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement(Portal$3, null, /*#__PURE__*/React.createElement(Content$3, {
    side: side,
    align: align,
    alignOffset: alignOffset,
    sideOffset: sideOffset,
    collisionPadding: collisionPadding,
    asChild: true
  }, /*#__PURE__*/React.createElement("div", Object.assign({
    className: ` card-hover-wrapper overflow-hidden text-sm ${width} z-30  rounded-lg bg-white shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none`
  }, props), children, /*#__PURE__*/React.createElement(Arrow, {
    className: "fill-white"
  }))));
};
HoverCard.Trigger = HoverCardTrigger;
HoverCard.Content = HoverCardContent;

const Popover = _ref => {
  let {
    children,
    modal,
    open,
    onChange,
    defaultOpen
  } = _ref;
  // A component can be considered controlled when its value prop is
  // not undefined.
  const isControlled = typeof open != "undefined";
  // When a component is not controlled, it can have a defaultValue.
  const hasDefaultOpen = typeof defaultOpen != "undefined";
  // If a defaultValue is specified, we will use it as our initial
  // state.  Otherwise, we will simply use an empty string.
  const [internalOpen, setInternalOpen] = useState(hasDefaultOpen ? defaultOpen : false);
  // Internally, we need to deal with some value. Depending on whether
  // the component is controlled or not, that value comes from its
  // props or from its internal state.
  const isOpen = isControlled ? open : internalOpen;
  const onOpenChange = opened => {
    if (onChange) {
      onChange(opened);
    }
    // If the component is uncontrolled, we need to update our
    // internal value here.
    if (!isControlled) {
      setInternalOpen(opened);
    }
  };
  return /*#__PURE__*/React.createElement(Root$7, {
    modal: modal,
    open: isOpen,
    onOpenChange: onOpenChange
  }, children);
};
const PopoverTrigger = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React.createElement(Trigger$4, {
    asChild: true
  }, children);
};
const PopoverHeader = _ref3 => {
  let {
    title
  } = _ref3;
  return /*#__PURE__*/React.createElement("header", {
    className: "flex justify-center text-center items-center py-[4px] px-[8px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-auto  relative z-[3] text-lg font-medium leading-6 text-primary-text  h-[40px] overflow-hidden px-8 whitespace-nowrap text-ellipsis flex items-center justify-center"
  }, title), /*#__PURE__*/React.createElement(Close$1, {
    asChild: true,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(CloseButton$1, null)));
};
const PopoverContent = _ref4 => {
  let {
    children,
    title,
    side = "bottom",
    sideOffset = 2,
    align = "center",
    alignOffset = 2,
    collisionPadding = 10,
    headerPresent = false,
    width = "w-56",
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(Portal$4, null, /*#__PURE__*/React.createElement(Content$4, {
    side: side,
    sideOffset: sideOffset,
    align: align,
    alignOffset: alignOffset,
    asChild: true,
    collisionPadding: collisionPadding,
    "data-header-present": headerPresent
  }, /*#__PURE__*/React.createElement(motion.div, Object.assign({
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
    className: `popover-wrapper ${width} z-30 overflow-hidden rounded-xl bg-card-bg-color shadow-overlap-shadow ring-1 ring-gray-700 ring-opacity-5 focus:outline-none`
  }, props), title ? /*#__PURE__*/React.createElement(PopoverHeader, {
    title: title
  }) : null, /*#__PURE__*/React.createElement(Scrollable, null, /*#__PURE__*/React.createElement("div", {
    className: "popover-content px-5 py-5"
  }, children)), /*#__PURE__*/React.createElement(Arrow$1, {
    className: "fill-white"
  }))));
};
Popover.Trigger = PopoverTrigger;
Popover.Header = PopoverHeader;
Popover.Content = PopoverContent;

export { Avatar$1 as Avatar, AvatarGroup, Backdrop$1 as Backdrop, Badge$1 as Badge, Button$1 as Button, Confirm, Divider, Drawer, Dropdown, HoverCard, IconButton$1 as IconButton, LoadingLine, Modal, Popover, Spinner };
//# sourceMappingURL=rohan-react.esm.js.map
