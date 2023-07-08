// All input interfaces

export interface InputTextsTypes {
    placeholder: string;
    size: string;
    onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onblur: (e: React.MouseEventHandler<HTMLInputElement>) => void;
    variant: string;
    type: string;
    isInvalid: boolean;
}
