import { Button } from "../../core";

type Props = {
  onConfirm: () => void;
  onClose: () => void;
  negativeText?: string;
  positiveText?: string;
  errorText?: string;
};

export default function AggrementFooter(props: Props) {
  const {
    onClose,
    onConfirm,
    negativeText = "close",
    positiveText = "confirm",
    errorText = "",
  } = props;
  return (
    <section className="bg-white flex justify-between items-center rounded drop-shadow-md w-full px-4 py-2">
      <div className="whitespace-nowrap overflow-hidden text-ellipsis text-red-600 m-0 font-light text-xs">
        {errorText}
      </div>
      <div className="flex-shrink-0">
        <Button onClick={onClose} className="mx-4">
          {negativeText}
        </Button>
        <Button onClick={onConfirm}>{positiveText}</Button>
      </div>
    </section>
  );
}
