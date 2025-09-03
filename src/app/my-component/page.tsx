interface MessageProps{
    message: string
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
    return(
        <div>
            {props.message}
        </div>
    );
}

const MyComponent = () => {
    return(
        <div>
            <Message message="testando" />
        </div>
    );

}

export default MyComponent;