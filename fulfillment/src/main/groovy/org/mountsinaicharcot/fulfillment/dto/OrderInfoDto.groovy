package org.mountsinaicharcot.fulfillment.dto

import groovy.transform.ToString

@ToString(includeNames=true)
class OrderInfoDto {
  String orderId
  List<String> fileNames
  List<String> filesProcessed
  String email
  String outputPath
  String status
}
