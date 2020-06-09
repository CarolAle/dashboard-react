import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './billingCycleActions'
import LabelInput from '../common/form/labelInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="row">
                        <Field name="name" component={LabelInput} readOnly={readOnly} label="Nome" cols="12 4" placeholder="Informe o nome" />
                        <Field name="month" component={LabelInput} readOnly={readOnly} label="Mês" cols="12 4" placeholder="Informe o mês" />
                        <Field name="year" component={LabelInput} readOnly={readOnly} label="Ano" cols="12 4" placeholder="Informe o Ano" />
                    </div>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}></Summary>
                    <div className="row">
                        <ItemList cols="12 6" list={credits} readOnly={readOnly}
                            field='credits' legend='Créditos' showStatus={true}/>
                        <ItemList cols="12 6" list={debts} readOnly={readOnly}
                            field='debts' legend='Débitos' showStatus={true}/>
                    </div>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: "billingCycleForm", destroyOnUnmount: false}) (BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)