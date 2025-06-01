export interface Props {
    title: string;
    onClick: () => void;
}

export interface State {
    isActive: boolean;
    count: number;
}