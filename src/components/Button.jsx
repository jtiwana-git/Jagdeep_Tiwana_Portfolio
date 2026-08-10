// 25:40
export const Button = ({ className, size, children, ...props }) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visable:ring-2 focus-visable:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
