import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingCycleActions'
import LabelInput from '../common/form/labelInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="row">
                        <Field name="name" component={LabelInput} label="Nome" cols="12 4" placeholder="Informe o nome" />
                        <Field name="month" component={LabelInput} label="Mês" cols="12 4" placeholder="Informe o mês" />
                        <Field name="year" component={LabelInput} label="Ano" cols="12 4" placeholder="Informe o Ano" />
                    </div>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: "billinCycleForm", destroyOnUnmount: false}) (BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)