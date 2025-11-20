interface MediaButtonProps{
    logo: string;
    bgColor: string;
    socialLink: string;
}

export default function MediaButton(props : MediaButtonProps) {
    return (
        <a href={props.socialLink}>
            <div className={`h-[17.5 w-17.5 rounded-lg ${props.bgColor}`}>
                <img src={props.logo}/>
            </div>
        </a>
    )
}