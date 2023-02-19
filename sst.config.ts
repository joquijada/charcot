import { SSTConfig } from 'sst'
import { CommonStack } from './stacks/CommonStack'
import { BackEndPaidAccountStack } from './stacks/BackEndPaidAccountStack'
import { BackEndOdpStack } from './stacks/BackEndOdpStack'
import { FrontendStack } from './stacks/FrontEndStack'
import { FulfillmentStack } from './stacks/FulfillmentStack'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default {
  config() {
    return {
      name: 'charcot',
      region: 'us-east-1'
    }
  },
  stacks(app) {
    const stage = app.stage
    app
      .stack(CommonStack, {
        stackName: `${stage}-${app.name}-common`,
        tags: { created_by: 'sst' }
      })
      .stack(BackEndPaidAccountStack, {
        stackName: `${stage}-${app.name}-backend-paid-account`,
        tags: { created_by: 'sst' }
      })
      .stack(FulfillmentStack, {
        stackName: `${stage}-${app.name}-fulfillment`,
        tags: { created_by: 'sst' }
      })
      .stack(FrontendStack, {
        stackName: `${stage}-${app.name}-frontend`,
        tags: { created_by: 'sst' }
      })
      .stack(BackEndOdpStack, {
        stackName: `${stage}-${app.name}-backend-odp`,
        tags: { created_by: 'sst' }
      })
  }
} satisfies SSTConfig