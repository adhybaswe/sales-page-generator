export default function ApplicationLogo({ className = "w-10 h-10", withText = true, ...props }) {
    return (
        <div className={`flex flex-col items-center justify-center ${className}`} {...props}>
            <svg className="w-full h-full text-brand-dark shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 4.2l6.9 13.8H5.1L12 6.2z"/>
            </svg>
            {withText && (
                <span className="text-[25%] font-[950] tracking-[0.3em] uppercase mt-1">SalesGen</span>
            )}
        </div>
    );
}
