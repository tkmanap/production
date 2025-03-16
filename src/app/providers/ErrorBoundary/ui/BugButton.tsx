import {useEffect, useState} from "react";
import {Button} from "shared/ui/Button/Button";


//Компонент для тестирование ErrorBoundary
const BugButton = () => {
    const [error, setError] = useState(false)
    const onClickHandle = () => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return (
        <Button
            onClick={onClickHandle}
        >
            Throw Error
        </Button>
    );
};

export default BugButton;