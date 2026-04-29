export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center justify-center rounded-full border border-brand-tan/30 bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-brand-dark shadow-sm transition duration-150 ease-in-out hover:bg-brand-bg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:ring-offset-2 disabled:opacity-25 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}