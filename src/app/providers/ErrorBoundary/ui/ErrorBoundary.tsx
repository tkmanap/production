import * as React from 'react';
import {ErrorInfo, ReactNode} from "react";

interface ErrorBoundaryProps {
    children: ReactNode,
    fallback: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(_: Error) {
        return {hasError: true};
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(
            error,

            info.componentStack,
        );
    }

    render() {
        const {hasError} = this.state
        const {children} = this.props
        if (hasError) {
            return this.props.fallback;
        }
        return children;
    }
}

export default ErrorBoundary