import Label from './Label/label';

interface IDashboardFormInput {
  register: any;
  errors: any;
  labelTitle: string;
  value: string;
  placeholder: string;
  isRequired: boolean;
}

export default function DashboardFormTextArea({
  register,
  errors,
  labelTitle,
  value,
  placeholder,
  isRequired,
}: IDashboardFormInput) {
  return (
    <div>
      <Label labelTitle={labelTitle} isRequired={isRequired} />
      <textarea
        rows={4}
        className={`${
          errors[value] && errors[value].type === 'required'
            ? 'border-red-500'
            : 'border-gray-300'
        } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        placeholder={placeholder}
        {...register(value, { required: isRequired })}
      ></textarea>
    </div>
  );
}