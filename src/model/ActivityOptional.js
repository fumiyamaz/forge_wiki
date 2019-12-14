/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient');



  /**
   * The ActivityOptional model module.
   * @module model/ActivityOptional
   * @deprecated
   */

   /**
    * Constructs a <code>ActivityOptional</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ActivityOptional} obj Optional instance to populate.
    * @return {module:model/ActivityOptional} The populated <code>ActivityOptional</code> instance.
    * @deprecated
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('Id')) {
        obj.Id = ApiClient.convertToType(data.Id, 'String');
      }
      if (data.hasOwnProperty('Instruction')) {
        obj.Instruction = ApiClient.convertToType(data.Instruction, Object);
      }
      if (data.hasOwnProperty('AppPackages')) {
        obj.AppPackages = ApiClient.convertToType(data.AppPackages, ['String']);
      }
      if (data.hasOwnProperty('RequiredEngineVersion')) {
        obj.RequiredEngineVersion = ApiClient.convertToType(data.RequiredEngineVersion, 'String');
      }
      if (data.hasOwnProperty('Parameters')) {
        obj.Parameters = ApiClient.convertToType(data.Parameters, Object);
      }
      if (data.hasOwnProperty('AllowedChildProcesses')) {
        obj.AllowedChildProcesses = ApiClient.convertToType(data.AllowedChildProcesses, [Object]);
      }
      if (data.hasOwnProperty('Version')) {
        obj.Version = ApiClient.convertToType(data.Version, 'Integer');
      }
      if (data.hasOwnProperty('Description')) {
        obj.Description = ApiClient.convertToType(data.Description, 'String');
      }
      if (data.hasOwnProperty('HostApplication')) {
        obj.HostApplication = ApiClient.convertToType(data.HostApplication, 'String');
      }
      if (data.hasOwnProperty('IsPublic')) {
        obj.IsPublic = ApiClient.convertToType(data.IsPublic, 'Boolean');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>ActivityOptional</code>.
   * @alias module:model/ActivityOptional
   * @class
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityOptional} obj Optional instance to populate.
   * @deprecated
   */
  var exports = function(theData, obj) {
    var _this = this;












    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>ActivityOptional</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityOptional} obj Optional instance to populate.
   * @return {module:model/ActivityOptional} The populated <code>ActivityOptional</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {String} Id
   */
  exports.prototype.Id = undefined;
  /**
   * @member {Object} Instruction
   */
  exports.prototype.Instruction = undefined;
  /**
   * @member {Array.<String>} AppPackages
   */
  exports.prototype.AppPackages = undefined;
  /**
   * @member {String} RequiredEngineVersion
   */
  exports.prototype.RequiredEngineVersion = undefined;
  /**
   * @member {Object} Parameters
   */
  exports.prototype.Parameters = undefined;
  /**
   * @member {Array.<Object>} AllowedChildProcesses
   */
  exports.prototype.AllowedChildProcesses = undefined;
  /**
   * @member {Integer} Version
   */
  exports.prototype.Version = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype.Description = undefined;
  /**
   * @member {String} HostApplication
   */
  exports.prototype.HostApplication = undefined;
  /**
   * @member {Boolean} IsPublic
   */
  exports.prototype.IsPublic = undefined;



  return exports;
}());


