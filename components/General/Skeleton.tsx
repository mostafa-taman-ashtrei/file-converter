import { merge } from "@/utils/tailwind";

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={merge("animate-pulse rounded-md bg-muted", className)}
            {...props}
        />
    );
};

export { Skeleton };
