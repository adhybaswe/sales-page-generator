export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-full border border-transparent bg-brand-dark px-8 py-3 text-[10px] font-black uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-black focus:bg-black active:bg-black focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:ring-offset-2 disabled:opacity-25 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}