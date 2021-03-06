import * as sst from '@serverless-stack/resources'

type CharcotFileName = string

export interface CerebrumImageMetaData {
  fileName: CharcotFileName
  region: string
  stain: string
  age: string
  race: string
  sex: 'Male' | 'Female'
  uploadDate: string
  imageNumber: number
  total: number
}

export interface CerebrumImageMetaDataCreateResult {
  image: CerebrumImageMetaData
  success: boolean
  message: string
}

export interface CerebrumImageOrder {
  orderId: string
  created: string
  fileNames: CharcotFileName[]
  filter: string | undefined,
  email: string
}

export type Range = string

export interface Dimension {
  value: string | number,
  title: string,
  count: number,
  range: Range | undefined,
  rank: number
}

/**
 * The StackProps type does not accept arbitrary arguments like
 * https://serverless-stack.com/chapters/add-an-api-to-create-a-note.html examples claim
 * (it gives type error), so rolled my own to be able to connect stacks via outputs/inputs
 * during deployment. This will be useed until further notice, planning to write to SST devs
 * to find out what's up, like are their examples outdated or something???
 */
export interface StackArguments {
  api?: sst.Api,
  auth?: sst.Auth,
  handleCerebrumImageFulfillment?: sst.Function
  handleCerebrumImageTransfer?: sst.Function,
  zipBucketName?: string
}

export type RangeInfo = {
  range: Range,
  rank: number
}
