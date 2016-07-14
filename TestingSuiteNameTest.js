import chai from 'chai'
const expect = chai.expect
import sinon from 'sinon'
import {
  describeComponent
} from 'ember-mocha'
import {
  beforeEach,
  afterEach,
  it
} from 'mocha'

describeComponent(
  'testing-suite-name',
  'TestingSuiteName', {
    acceptance: true
  },
  function () {
    let component, sandbox

    beforeEach(function () {
      component = this.subject()
      sandbox = sinon.sandbox.create()
    })

    afterEach(function () {
      sandbox.restore()
    })
    beforeEach(function () {
      
    })
    
    describe('Username | Text Field', function () {
      it('Fires input event', function () {})
      describe('Focus and blur events', function () {
          it('Does this', function () {})
          it('Does that', function () {})
          describe('Keeps Nesting', function () {
              it('Nested does this', function () {})
              it('Nested does that', function () {})
          })
      })
    })
    describe('Password | Text Field', function () {
      it('Fires input event', function () {})
      describe('Focus and blur events', function () {
          it('Does this', function () {})
          it('Does that', function () {})
          describe('Keeps Nesting', function () {
              it('Nested does this', function () {})
              it('Nested does that', function () {})
          })
      })
    })
  }
)