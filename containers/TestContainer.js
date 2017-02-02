import Test from '../components/Test'

import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/test'

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect()(Test)