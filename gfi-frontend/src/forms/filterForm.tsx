import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form"
import React from "react"
import FilterAltIcon from '@mui/icons-material/FilterAlt';

interface IFormValues {
  "First Name": string
  Age: number
}


type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
}


// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)


// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
))


export default function FilterForm()  {
  const { register, handleSubmit } = useForm<IFormValues>()


  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <>
    <h5 className="text-2xl"><FilterAltIcon /> Filters</h5>
    <input type="text" list="text" />
    <datalist id="text">
      <option value="Internet explorer">Internet Explorer</option>
      <option value="Firefox">firefox</option>
      <option value="Chrome">chrome</option>
      <option value="Opera">opera</option>
      <option value="Safari">safari</option>
    </datalist>

    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
    </>
  )
}