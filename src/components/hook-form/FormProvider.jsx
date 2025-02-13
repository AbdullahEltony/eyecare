import {FormProvider as Form} from 'react-hook-form'
import PropTypes from "prop-types";

const FormProvider = ({children, onSubmit, methods}) => {
  return (
    <Form {...methods}>
        <form  onSubmit={onSubmit}>
            {children}
        </form>
    </Form>
  )
}

export default FormProvider

FormProvider.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  methods: PropTypes.object
}
