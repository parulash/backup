/* eslint-disable */
/*eslint-disable*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const crystalballpb = $root.crystalballpb = (() => {

    /**
     * Namespace crystalballpb.
     * @exports crystalballpb
     * @namespace
     */
    const crystalballpb = {};

    crystalballpb.AltSolutionsRequest = (function() {

        /**
         * Properties of an AltSolutionsRequest.
         * @memberof crystalballpb
         * @interface IAltSolutionsRequest
         * @property {string|null} [symptomId] AltSolutionsRequest symptomId
         * @property {Array.<string>|null} [styleId] AltSolutionsRequest styleId
         * @property {string|null} [marketShortName] AltSolutionsRequest marketShortName
         */

        /**
         * Constructs a new AltSolutionsRequest.
         * @memberof crystalballpb
         * @classdesc Represents an AltSolutionsRequest.
         * @implements IAltSolutionsRequest
         * @constructor
         * @param {crystalballpb.IAltSolutionsRequest=} [properties] Properties to set
         */
        function AltSolutionsRequest(properties) {
            this.styleId = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AltSolutionsRequest symptomId.
         * @member {string} symptomId
         * @memberof crystalballpb.AltSolutionsRequest
         * @instance
         */
        AltSolutionsRequest.prototype.symptomId = "";

        /**
         * AltSolutionsRequest styleId.
         * @member {Array.<string>} styleId
         * @memberof crystalballpb.AltSolutionsRequest
         * @instance
         */
        AltSolutionsRequest.prototype.styleId = $util.emptyArray;

        /**
         * AltSolutionsRequest marketShortName.
         * @member {string} marketShortName
         * @memberof crystalballpb.AltSolutionsRequest
         * @instance
         */
        AltSolutionsRequest.prototype.marketShortName = "";

        /**
         * Creates a new AltSolutionsRequest instance using the specified properties.
         * @function create
         * @memberof crystalballpb.AltSolutionsRequest
         * @static
         * @param {crystalballpb.IAltSolutionsRequest=} [properties] Properties to set
         * @returns {crystalballpb.AltSolutionsRequest} AltSolutionsRequest instance
         */
        AltSolutionsRequest.create = function create(properties) {
            return new AltSolutionsRequest(properties);
        };

        /**
         * Encodes the specified AltSolutionsRequest message. Does not implicitly {@link crystalballpb.AltSolutionsRequest.verify|verify} messages.
         * @function encode
         * @memberof crystalballpb.AltSolutionsRequest
         * @static
         * @param {crystalballpb.IAltSolutionsRequest} message AltSolutionsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AltSolutionsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symptomId != null && Object.hasOwnProperty.call(message, "symptomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.symptomId);
            if (message.styleId != null && message.styleId.length)
                for (let i = 0; i < message.styleId.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.styleId[i]);
            if (message.marketShortName != null && Object.hasOwnProperty.call(message, "marketShortName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.marketShortName);
            return writer;
        };

        /**
         * Encodes the specified AltSolutionsRequest message, length delimited. Does not implicitly {@link crystalballpb.AltSolutionsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crystalballpb.AltSolutionsRequest
         * @static
         * @param {crystalballpb.IAltSolutionsRequest} message AltSolutionsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AltSolutionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AltSolutionsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crystalballpb.AltSolutionsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crystalballpb.AltSolutionsRequest} AltSolutionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AltSolutionsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crystalballpb.AltSolutionsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.symptomId = reader.string();
                    break;
                case 2:
                    if (!(message.styleId && message.styleId.length))
                        message.styleId = [];
                    message.styleId.push(reader.string());
                    break;
                case 3:
                    message.marketShortName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AltSolutionsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crystalballpb.AltSolutionsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crystalballpb.AltSolutionsRequest} AltSolutionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AltSolutionsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AltSolutionsRequest message.
         * @function verify
         * @memberof crystalballpb.AltSolutionsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AltSolutionsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symptomId != null && message.hasOwnProperty("symptomId"))
                if (!$util.isString(message.symptomId))
                    return "symptomId: string expected";
            if (message.styleId != null && message.hasOwnProperty("styleId")) {
                if (!Array.isArray(message.styleId))
                    return "styleId: array expected";
                for (let i = 0; i < message.styleId.length; ++i)
                    if (!$util.isString(message.styleId[i]))
                        return "styleId: string[] expected";
            }
            if (message.marketShortName != null && message.hasOwnProperty("marketShortName"))
                if (!$util.isString(message.marketShortName))
                    return "marketShortName: string expected";
            return null;
        };

        /**
         * Creates an AltSolutionsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crystalballpb.AltSolutionsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crystalballpb.AltSolutionsRequest} AltSolutionsRequest
         */
        AltSolutionsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crystalballpb.AltSolutionsRequest)
                return object;
            let message = new $root.crystalballpb.AltSolutionsRequest();
            if (object.symptomId != null)
                message.symptomId = String(object.symptomId);
            if (object.styleId) {
                if (!Array.isArray(object.styleId))
                    throw TypeError(".crystalballpb.AltSolutionsRequest.styleId: array expected");
                message.styleId = [];
                for (let i = 0; i < object.styleId.length; ++i)
                    message.styleId[i] = String(object.styleId[i]);
            }
            if (object.marketShortName != null)
                message.marketShortName = String(object.marketShortName);
            return message;
        };

        /**
         * Creates a plain object from an AltSolutionsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crystalballpb.AltSolutionsRequest
         * @static
         * @param {crystalballpb.AltSolutionsRequest} message AltSolutionsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AltSolutionsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.styleId = [];
            if (options.defaults) {
                object.symptomId = "";
                object.marketShortName = "";
            }
            if (message.symptomId != null && message.hasOwnProperty("symptomId"))
                object.symptomId = message.symptomId;
            if (message.styleId && message.styleId.length) {
                object.styleId = [];
                for (let j = 0; j < message.styleId.length; ++j)
                    object.styleId[j] = message.styleId[j];
            }
            if (message.marketShortName != null && message.hasOwnProperty("marketShortName"))
                object.marketShortName = message.marketShortName;
            return object;
        };

        /**
         * Converts this AltSolutionsRequest to JSON.
         * @function toJSON
         * @memberof crystalballpb.AltSolutionsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AltSolutionsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AltSolutionsRequest;
    })();

    crystalballpb.SymptomStatsRequest = (function() {

        /**
         * Properties of a SymptomStatsRequest.
         * @memberof crystalballpb
         * @interface ISymptomStatsRequest
         * @property {string|null} [symptomId] SymptomStatsRequest symptomId
         * @property {string|null} [marketShortName] SymptomStatsRequest marketShortName
         */

        /**
         * Constructs a new SymptomStatsRequest.
         * @memberof crystalballpb
         * @classdesc Represents a SymptomStatsRequest.
         * @implements ISymptomStatsRequest
         * @constructor
         * @param {crystalballpb.ISymptomStatsRequest=} [properties] Properties to set
         */
        function SymptomStatsRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SymptomStatsRequest symptomId.
         * @member {string} symptomId
         * @memberof crystalballpb.SymptomStatsRequest
         * @instance
         */
        SymptomStatsRequest.prototype.symptomId = "";

        /**
         * SymptomStatsRequest marketShortName.
         * @member {string} marketShortName
         * @memberof crystalballpb.SymptomStatsRequest
         * @instance
         */
        SymptomStatsRequest.prototype.marketShortName = "";

        /**
         * Creates a new SymptomStatsRequest instance using the specified properties.
         * @function create
         * @memberof crystalballpb.SymptomStatsRequest
         * @static
         * @param {crystalballpb.ISymptomStatsRequest=} [properties] Properties to set
         * @returns {crystalballpb.SymptomStatsRequest} SymptomStatsRequest instance
         */
        SymptomStatsRequest.create = function create(properties) {
            return new SymptomStatsRequest(properties);
        };

        /**
         * Encodes the specified SymptomStatsRequest message. Does not implicitly {@link crystalballpb.SymptomStatsRequest.verify|verify} messages.
         * @function encode
         * @memberof crystalballpb.SymptomStatsRequest
         * @static
         * @param {crystalballpb.ISymptomStatsRequest} message SymptomStatsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SymptomStatsRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symptomId != null && Object.hasOwnProperty.call(message, "symptomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.symptomId);
            if (message.marketShortName != null && Object.hasOwnProperty.call(message, "marketShortName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.marketShortName);
            return writer;
        };

        /**
         * Encodes the specified SymptomStatsRequest message, length delimited. Does not implicitly {@link crystalballpb.SymptomStatsRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crystalballpb.SymptomStatsRequest
         * @static
         * @param {crystalballpb.ISymptomStatsRequest} message SymptomStatsRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SymptomStatsRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SymptomStatsRequest message from the specified reader or buffer.
         * @function decode
         * @memberof crystalballpb.SymptomStatsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crystalballpb.SymptomStatsRequest} SymptomStatsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SymptomStatsRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crystalballpb.SymptomStatsRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.symptomId = reader.string();
                    break;
                case 2:
                    message.marketShortName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SymptomStatsRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crystalballpb.SymptomStatsRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crystalballpb.SymptomStatsRequest} SymptomStatsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SymptomStatsRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SymptomStatsRequest message.
         * @function verify
         * @memberof crystalballpb.SymptomStatsRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SymptomStatsRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symptomId != null && message.hasOwnProperty("symptomId"))
                if (!$util.isString(message.symptomId))
                    return "symptomId: string expected";
            if (message.marketShortName != null && message.hasOwnProperty("marketShortName"))
                if (!$util.isString(message.marketShortName))
                    return "marketShortName: string expected";
            return null;
        };

        /**
         * Creates a SymptomStatsRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crystalballpb.SymptomStatsRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crystalballpb.SymptomStatsRequest} SymptomStatsRequest
         */
        SymptomStatsRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.crystalballpb.SymptomStatsRequest)
                return object;
            let message = new $root.crystalballpb.SymptomStatsRequest();
            if (object.symptomId != null)
                message.symptomId = String(object.symptomId);
            if (object.marketShortName != null)
                message.marketShortName = String(object.marketShortName);
            return message;
        };

        /**
         * Creates a plain object from a SymptomStatsRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crystalballpb.SymptomStatsRequest
         * @static
         * @param {crystalballpb.SymptomStatsRequest} message SymptomStatsRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SymptomStatsRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.symptomId = "";
                object.marketShortName = "";
            }
            if (message.symptomId != null && message.hasOwnProperty("symptomId"))
                object.symptomId = message.symptomId;
            if (message.marketShortName != null && message.hasOwnProperty("marketShortName"))
                object.marketShortName = message.marketShortName;
            return object;
        };

        /**
         * Converts this SymptomStatsRequest to JSON.
         * @function toJSON
         * @memberof crystalballpb.SymptomStatsRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SymptomStatsRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SymptomStatsRequest;
    })();

    crystalballpb.SymptomStatsResponse = (function() {

        /**
         * Properties of a SymptomStatsResponse.
         * @memberof crystalballpb
         * @interface ISymptomStatsResponse
         * @property {string|null} [symptomID] SymptomStatsResponse symptomID
         * @property {string|null} [marketShortName] SymptomStatsResponse marketShortName
         * @property {Array.<string>|null} [checkFirst] SymptomStatsResponse checkFirst
         * @property {string|null} [diyUrl] SymptomStatsResponse diyUrl
         * @property {number|null} [cycleMinDays] SymptomStatsResponse cycleMinDays
         * @property {number|null} [cycleMaxDays] SymptomStatsResponse cycleMaxDays
         * @property {number|null} [cycleAverageDays] SymptomStatsResponse cycleAverageDays
         * @property {number|null} [repairCostMin] SymptomStatsResponse repairCostMin
         * @property {number|null} [repairCostMax] SymptomStatsResponse repairCostMax
         * @property {number|null} [replaceCostMin] SymptomStatsResponse replaceCostMin
         * @property {number|null} [replaceCostMax] SymptomStatsResponse replaceCostMax
         * @property {crystalballpb.IrepairLikelyHood|null} [repairLikelyhood] SymptomStatsResponse repairLikelyhood
         * @property {string|null} [serviceType] SymptomStatsResponse serviceType
         */

        /**
         * Constructs a new SymptomStatsResponse.
         * @memberof crystalballpb
         * @classdesc Represents a SymptomStatsResponse.
         * @implements ISymptomStatsResponse
         * @constructor
         * @param {crystalballpb.ISymptomStatsResponse=} [properties] Properties to set
         */
        function SymptomStatsResponse(properties) {
            this.checkFirst = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SymptomStatsResponse symptomID.
         * @member {string} symptomID
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.symptomID = "";

        /**
         * SymptomStatsResponse marketShortName.
         * @member {string} marketShortName
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.marketShortName = "";

        /**
         * SymptomStatsResponse checkFirst.
         * @member {Array.<string>} checkFirst
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.checkFirst = $util.emptyArray;

        /**
         * SymptomStatsResponse diyUrl.
         * @member {string} diyUrl
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.diyUrl = "";

        /**
         * SymptomStatsResponse cycleMinDays.
         * @member {number} cycleMinDays
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.cycleMinDays = 0;

        /**
         * SymptomStatsResponse cycleMaxDays.
         * @member {number} cycleMaxDays
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.cycleMaxDays = 0;

        /**
         * SymptomStatsResponse cycleAverageDays.
         * @member {number} cycleAverageDays
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.cycleAverageDays = 0;

        /**
         * SymptomStatsResponse repairCostMin.
         * @member {number} repairCostMin
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.repairCostMin = 0;

        /**
         * SymptomStatsResponse repairCostMax.
         * @member {number} repairCostMax
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.repairCostMax = 0;

        /**
         * SymptomStatsResponse replaceCostMin.
         * @member {number} replaceCostMin
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.replaceCostMin = 0;

        /**
         * SymptomStatsResponse replaceCostMax.
         * @member {number} replaceCostMax
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.replaceCostMax = 0;

        /**
         * SymptomStatsResponse repairLikelyhood.
         * @member {crystalballpb.IrepairLikelyHood|null|undefined} repairLikelyhood
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.repairLikelyhood = null;

        /**
         * SymptomStatsResponse serviceType.
         * @member {string} serviceType
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         */
        SymptomStatsResponse.prototype.serviceType = "";

        /**
         * Creates a new SymptomStatsResponse instance using the specified properties.
         * @function create
         * @memberof crystalballpb.SymptomStatsResponse
         * @static
         * @param {crystalballpb.ISymptomStatsResponse=} [properties] Properties to set
         * @returns {crystalballpb.SymptomStatsResponse} SymptomStatsResponse instance
         */
        SymptomStatsResponse.create = function create(properties) {
            return new SymptomStatsResponse(properties);
        };

        /**
         * Encodes the specified SymptomStatsResponse message. Does not implicitly {@link crystalballpb.SymptomStatsResponse.verify|verify} messages.
         * @function encode
         * @memberof crystalballpb.SymptomStatsResponse
         * @static
         * @param {crystalballpb.ISymptomStatsResponse} message SymptomStatsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SymptomStatsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symptomID != null && Object.hasOwnProperty.call(message, "symptomID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.symptomID);
            if (message.marketShortName != null && Object.hasOwnProperty.call(message, "marketShortName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.marketShortName);
            if (message.checkFirst != null && message.checkFirst.length)
                for (let i = 0; i < message.checkFirst.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.checkFirst[i]);
            if (message.diyUrl != null && Object.hasOwnProperty.call(message, "diyUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.diyUrl);
            if (message.cycleMinDays != null && Object.hasOwnProperty.call(message, "cycleMinDays"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cycleMinDays);
            if (message.cycleMaxDays != null && Object.hasOwnProperty.call(message, "cycleMaxDays"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.cycleMaxDays);
            if (message.cycleAverageDays != null && Object.hasOwnProperty.call(message, "cycleAverageDays"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.cycleAverageDays);
            if (message.repairCostMin != null && Object.hasOwnProperty.call(message, "repairCostMin"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.repairCostMin);
            if (message.repairCostMax != null && Object.hasOwnProperty.call(message, "repairCostMax"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.repairCostMax);
            if (message.replaceCostMin != null && Object.hasOwnProperty.call(message, "replaceCostMin"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.replaceCostMin);
            if (message.replaceCostMax != null && Object.hasOwnProperty.call(message, "replaceCostMax"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.replaceCostMax);
            if (message.repairLikelyhood != null && Object.hasOwnProperty.call(message, "repairLikelyhood"))
                $root.crystalballpb.repairLikelyHood.encode(message.repairLikelyhood, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.serviceType != null && Object.hasOwnProperty.call(message, "serviceType"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.serviceType);
            return writer;
        };

        /**
         * Encodes the specified SymptomStatsResponse message, length delimited. Does not implicitly {@link crystalballpb.SymptomStatsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crystalballpb.SymptomStatsResponse
         * @static
         * @param {crystalballpb.ISymptomStatsResponse} message SymptomStatsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SymptomStatsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SymptomStatsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crystalballpb.SymptomStatsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crystalballpb.SymptomStatsResponse} SymptomStatsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SymptomStatsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crystalballpb.SymptomStatsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.symptomID = reader.string();
                    break;
                case 2:
                    message.marketShortName = reader.string();
                    break;
                case 3:
                    if (!(message.checkFirst && message.checkFirst.length))
                        message.checkFirst = [];
                    message.checkFirst.push(reader.string());
                    break;
                case 4:
                    message.diyUrl = reader.string();
                    break;
                case 5:
                    message.cycleMinDays = reader.uint32();
                    break;
                case 6:
                    message.cycleMaxDays = reader.uint32();
                    break;
                case 7:
                    message.cycleAverageDays = reader.uint32();
                    break;
                case 8:
                    message.repairCostMin = reader.uint32();
                    break;
                case 9:
                    message.repairCostMax = reader.uint32();
                    break;
                case 10:
                    message.replaceCostMin = reader.uint32();
                    break;
                case 11:
                    message.replaceCostMax = reader.uint32();
                    break;
                case 12:
                    message.repairLikelyhood = $root.crystalballpb.repairLikelyHood.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.serviceType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SymptomStatsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crystalballpb.SymptomStatsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crystalballpb.SymptomStatsResponse} SymptomStatsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SymptomStatsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SymptomStatsResponse message.
         * @function verify
         * @memberof crystalballpb.SymptomStatsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SymptomStatsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symptomID != null && message.hasOwnProperty("symptomID"))
                if (!$util.isString(message.symptomID))
                    return "symptomID: string expected";
            if (message.marketShortName != null && message.hasOwnProperty("marketShortName"))
                if (!$util.isString(message.marketShortName))
                    return "marketShortName: string expected";
            if (message.checkFirst != null && message.hasOwnProperty("checkFirst")) {
                if (!Array.isArray(message.checkFirst))
                    return "checkFirst: array expected";
                for (let i = 0; i < message.checkFirst.length; ++i)
                    if (!$util.isString(message.checkFirst[i]))
                        return "checkFirst: string[] expected";
            }
            if (message.diyUrl != null && message.hasOwnProperty("diyUrl"))
                if (!$util.isString(message.diyUrl))
                    return "diyUrl: string expected";
            if (message.cycleMinDays != null && message.hasOwnProperty("cycleMinDays"))
                if (!$util.isInteger(message.cycleMinDays))
                    return "cycleMinDays: integer expected";
            if (message.cycleMaxDays != null && message.hasOwnProperty("cycleMaxDays"))
                if (!$util.isInteger(message.cycleMaxDays))
                    return "cycleMaxDays: integer expected";
            if (message.cycleAverageDays != null && message.hasOwnProperty("cycleAverageDays"))
                if (!$util.isInteger(message.cycleAverageDays))
                    return "cycleAverageDays: integer expected";
            if (message.repairCostMin != null && message.hasOwnProperty("repairCostMin"))
                if (!$util.isInteger(message.repairCostMin))
                    return "repairCostMin: integer expected";
            if (message.repairCostMax != null && message.hasOwnProperty("repairCostMax"))
                if (!$util.isInteger(message.repairCostMax))
                    return "repairCostMax: integer expected";
            if (message.replaceCostMin != null && message.hasOwnProperty("replaceCostMin"))
                if (!$util.isInteger(message.replaceCostMin))
                    return "replaceCostMin: integer expected";
            if (message.replaceCostMax != null && message.hasOwnProperty("replaceCostMax"))
                if (!$util.isInteger(message.replaceCostMax))
                    return "replaceCostMax: integer expected";
            if (message.repairLikelyhood != null && message.hasOwnProperty("repairLikelyhood")) {
                let error = $root.crystalballpb.repairLikelyHood.verify(message.repairLikelyhood);
                if (error)
                    return "repairLikelyhood." + error;
            }
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                if (!$util.isString(message.serviceType))
                    return "serviceType: string expected";
            return null;
        };

        /**
         * Creates a SymptomStatsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crystalballpb.SymptomStatsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crystalballpb.SymptomStatsResponse} SymptomStatsResponse
         */
        SymptomStatsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crystalballpb.SymptomStatsResponse)
                return object;
            let message = new $root.crystalballpb.SymptomStatsResponse();
            if (object.symptomID != null)
                message.symptomID = String(object.symptomID);
            if (object.marketShortName != null)
                message.marketShortName = String(object.marketShortName);
            if (object.checkFirst) {
                if (!Array.isArray(object.checkFirst))
                    throw TypeError(".crystalballpb.SymptomStatsResponse.checkFirst: array expected");
                message.checkFirst = [];
                for (let i = 0; i < object.checkFirst.length; ++i)
                    message.checkFirst[i] = String(object.checkFirst[i]);
            }
            if (object.diyUrl != null)
                message.diyUrl = String(object.diyUrl);
            if (object.cycleMinDays != null)
                message.cycleMinDays = object.cycleMinDays >>> 0;
            if (object.cycleMaxDays != null)
                message.cycleMaxDays = object.cycleMaxDays >>> 0;
            if (object.cycleAverageDays != null)
                message.cycleAverageDays = object.cycleAverageDays >>> 0;
            if (object.repairCostMin != null)
                message.repairCostMin = object.repairCostMin >>> 0;
            if (object.repairCostMax != null)
                message.repairCostMax = object.repairCostMax >>> 0;
            if (object.replaceCostMin != null)
                message.replaceCostMin = object.replaceCostMin >>> 0;
            if (object.replaceCostMax != null)
                message.replaceCostMax = object.replaceCostMax >>> 0;
            if (object.repairLikelyhood != null) {
                if (typeof object.repairLikelyhood !== "object")
                    throw TypeError(".crystalballpb.SymptomStatsResponse.repairLikelyhood: object expected");
                message.repairLikelyhood = $root.crystalballpb.repairLikelyHood.fromObject(object.repairLikelyhood);
            }
            if (object.serviceType != null)
                message.serviceType = String(object.serviceType);
            return message;
        };

        /**
         * Creates a plain object from a SymptomStatsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crystalballpb.SymptomStatsResponse
         * @static
         * @param {crystalballpb.SymptomStatsResponse} message SymptomStatsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SymptomStatsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.checkFirst = [];
            if (options.defaults) {
                object.symptomID = "";
                object.marketShortName = "";
                object.diyUrl = "";
                object.cycleMinDays = 0;
                object.cycleMaxDays = 0;
                object.cycleAverageDays = 0;
                object.repairCostMin = 0;
                object.repairCostMax = 0;
                object.replaceCostMin = 0;
                object.replaceCostMax = 0;
                object.repairLikelyhood = null;
                object.serviceType = "";
            }
            if (message.symptomID != null && message.hasOwnProperty("symptomID"))
                object.symptomID = message.symptomID;
            if (message.marketShortName != null && message.hasOwnProperty("marketShortName"))
                object.marketShortName = message.marketShortName;
            if (message.checkFirst && message.checkFirst.length) {
                object.checkFirst = [];
                for (let j = 0; j < message.checkFirst.length; ++j)
                    object.checkFirst[j] = message.checkFirst[j];
            }
            if (message.diyUrl != null && message.hasOwnProperty("diyUrl"))
                object.diyUrl = message.diyUrl;
            if (message.cycleMinDays != null && message.hasOwnProperty("cycleMinDays"))
                object.cycleMinDays = message.cycleMinDays;
            if (message.cycleMaxDays != null && message.hasOwnProperty("cycleMaxDays"))
                object.cycleMaxDays = message.cycleMaxDays;
            if (message.cycleAverageDays != null && message.hasOwnProperty("cycleAverageDays"))
                object.cycleAverageDays = message.cycleAverageDays;
            if (message.repairCostMin != null && message.hasOwnProperty("repairCostMin"))
                object.repairCostMin = message.repairCostMin;
            if (message.repairCostMax != null && message.hasOwnProperty("repairCostMax"))
                object.repairCostMax = message.repairCostMax;
            if (message.replaceCostMin != null && message.hasOwnProperty("replaceCostMin"))
                object.replaceCostMin = message.replaceCostMin;
            if (message.replaceCostMax != null && message.hasOwnProperty("replaceCostMax"))
                object.replaceCostMax = message.replaceCostMax;
            if (message.repairLikelyhood != null && message.hasOwnProperty("repairLikelyhood"))
                object.repairLikelyhood = $root.crystalballpb.repairLikelyHood.toObject(message.repairLikelyhood, options);
            if (message.serviceType != null && message.hasOwnProperty("serviceType"))
                object.serviceType = message.serviceType;
            return object;
        };

        /**
         * Converts this SymptomStatsResponse to JSON.
         * @function toJSON
         * @memberof crystalballpb.SymptomStatsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SymptomStatsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SymptomStatsResponse;
    })();

    crystalballpb.repairLikelyHood = (function() {

        /**
         * Properties of a repairLikelyHood.
         * @memberof crystalballpb
         * @interface IrepairLikelyHood
         * @property {number|null} [firstVisit] repairLikelyHood firstVisit
         * @property {number|null} [lessThanOne] repairLikelyHood lessThanOne
         * @property {number|null} [oneToFive] repairLikelyHood oneToFive
         * @property {number|null} [sixToTen] repairLikelyHood sixToTen
         * @property {number|null} [elevenToFifteen] repairLikelyHood elevenToFifteen
         * @property {number|null} [sixteenAbove] repairLikelyHood sixteenAbove
         * @property {number|null} [unknown] repairLikelyHood unknown
         */

        /**
         * Constructs a new repairLikelyHood.
         * @memberof crystalballpb
         * @classdesc Represents a repairLikelyHood.
         * @implements IrepairLikelyHood
         * @constructor
         * @param {crystalballpb.IrepairLikelyHood=} [properties] Properties to set
         */
        function repairLikelyHood(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * repairLikelyHood firstVisit.
         * @member {number} firstVisit
         * @memberof crystalballpb.repairLikelyHood
         * @instance
         */
        repairLikelyHood.prototype.firstVisit = 0;

        /**
         * repairLikelyHood lessThanOne.
         * @member {number} lessThanOne
         * @memberof crystalballpb.repairLikelyHood
         * @instance
         */
        repairLikelyHood.prototype.lessThanOne = 0;

        /**
         * repairLikelyHood oneToFive.
         * @member {number} oneToFive
         * @memberof crystalballpb.repairLikelyHood
         * @instance
         */
        repairLikelyHood.prototype.oneToFive = 0;

        /**
         * repairLikelyHood sixToTen.
         * @member {number} sixToTen
         * @memberof crystalballpb.repairLikelyHood
         * @instance
         */
        repairLikelyHood.prototype.sixToTen = 0;

        /**
         * repairLikelyHood elevenToFifteen.
         * @member {number} elevenToFifteen
         * @memberof crystalballpb.repairLikelyHood
         * @instance
         */
        repairLikelyHood.prototype.elevenToFifteen = 0;

        /**
         * repairLikelyHood sixteenAbove.
         * @member {number} sixteenAbove
         * @memberof crystalballpb.repairLikelyHood
         * @instance
         */
        repairLikelyHood.prototype.sixteenAbove = 0;

        /**
         * repairLikelyHood unknown.
         * @member {number} unknown
         * @memberof crystalballpb.repairLikelyHood
         * @instance
         */
        repairLikelyHood.prototype.unknown = 0;

        /**
         * Creates a new repairLikelyHood instance using the specified properties.
         * @function create
         * @memberof crystalballpb.repairLikelyHood
         * @static
         * @param {crystalballpb.IrepairLikelyHood=} [properties] Properties to set
         * @returns {crystalballpb.repairLikelyHood} repairLikelyHood instance
         */
        repairLikelyHood.create = function create(properties) {
            return new repairLikelyHood(properties);
        };

        /**
         * Encodes the specified repairLikelyHood message. Does not implicitly {@link crystalballpb.repairLikelyHood.verify|verify} messages.
         * @function encode
         * @memberof crystalballpb.repairLikelyHood
         * @static
         * @param {crystalballpb.IrepairLikelyHood} message repairLikelyHood message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        repairLikelyHood.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.firstVisit != null && Object.hasOwnProperty.call(message, "firstVisit"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.firstVisit);
            if (message.lessThanOne != null && Object.hasOwnProperty.call(message, "lessThanOne"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.lessThanOne);
            if (message.oneToFive != null && Object.hasOwnProperty.call(message, "oneToFive"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.oneToFive);
            if (message.sixToTen != null && Object.hasOwnProperty.call(message, "sixToTen"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.sixToTen);
            if (message.elevenToFifteen != null && Object.hasOwnProperty.call(message, "elevenToFifteen"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.elevenToFifteen);
            if (message.sixteenAbove != null && Object.hasOwnProperty.call(message, "sixteenAbove"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.sixteenAbove);
            if (message.unknown != null && Object.hasOwnProperty.call(message, "unknown"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.unknown);
            return writer;
        };

        /**
         * Encodes the specified repairLikelyHood message, length delimited. Does not implicitly {@link crystalballpb.repairLikelyHood.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crystalballpb.repairLikelyHood
         * @static
         * @param {crystalballpb.IrepairLikelyHood} message repairLikelyHood message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        repairLikelyHood.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a repairLikelyHood message from the specified reader or buffer.
         * @function decode
         * @memberof crystalballpb.repairLikelyHood
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crystalballpb.repairLikelyHood} repairLikelyHood
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        repairLikelyHood.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crystalballpb.repairLikelyHood();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.firstVisit = reader.uint32();
                    break;
                case 2:
                    message.lessThanOne = reader.uint32();
                    break;
                case 3:
                    message.oneToFive = reader.uint32();
                    break;
                case 4:
                    message.sixToTen = reader.uint32();
                    break;
                case 5:
                    message.elevenToFifteen = reader.uint32();
                    break;
                case 6:
                    message.sixteenAbove = reader.uint32();
                    break;
                case 7:
                    message.unknown = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a repairLikelyHood message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crystalballpb.repairLikelyHood
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crystalballpb.repairLikelyHood} repairLikelyHood
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        repairLikelyHood.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a repairLikelyHood message.
         * @function verify
         * @memberof crystalballpb.repairLikelyHood
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        repairLikelyHood.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.firstVisit != null && message.hasOwnProperty("firstVisit"))
                if (!$util.isInteger(message.firstVisit))
                    return "firstVisit: integer expected";
            if (message.lessThanOne != null && message.hasOwnProperty("lessThanOne"))
                if (!$util.isInteger(message.lessThanOne))
                    return "lessThanOne: integer expected";
            if (message.oneToFive != null && message.hasOwnProperty("oneToFive"))
                if (!$util.isInteger(message.oneToFive))
                    return "oneToFive: integer expected";
            if (message.sixToTen != null && message.hasOwnProperty("sixToTen"))
                if (!$util.isInteger(message.sixToTen))
                    return "sixToTen: integer expected";
            if (message.elevenToFifteen != null && message.hasOwnProperty("elevenToFifteen"))
                if (!$util.isInteger(message.elevenToFifteen))
                    return "elevenToFifteen: integer expected";
            if (message.sixteenAbove != null && message.hasOwnProperty("sixteenAbove"))
                if (!$util.isInteger(message.sixteenAbove))
                    return "sixteenAbove: integer expected";
            if (message.unknown != null && message.hasOwnProperty("unknown"))
                if (!$util.isInteger(message.unknown))
                    return "unknown: integer expected";
            return null;
        };

        /**
         * Creates a repairLikelyHood message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crystalballpb.repairLikelyHood
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crystalballpb.repairLikelyHood} repairLikelyHood
         */
        repairLikelyHood.fromObject = function fromObject(object) {
            if (object instanceof $root.crystalballpb.repairLikelyHood)
                return object;
            let message = new $root.crystalballpb.repairLikelyHood();
            if (object.firstVisit != null)
                message.firstVisit = object.firstVisit >>> 0;
            if (object.lessThanOne != null)
                message.lessThanOne = object.lessThanOne >>> 0;
            if (object.oneToFive != null)
                message.oneToFive = object.oneToFive >>> 0;
            if (object.sixToTen != null)
                message.sixToTen = object.sixToTen >>> 0;
            if (object.elevenToFifteen != null)
                message.elevenToFifteen = object.elevenToFifteen >>> 0;
            if (object.sixteenAbove != null)
                message.sixteenAbove = object.sixteenAbove >>> 0;
            if (object.unknown != null)
                message.unknown = object.unknown >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a repairLikelyHood message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crystalballpb.repairLikelyHood
         * @static
         * @param {crystalballpb.repairLikelyHood} message repairLikelyHood
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        repairLikelyHood.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.firstVisit = 0;
                object.lessThanOne = 0;
                object.oneToFive = 0;
                object.sixToTen = 0;
                object.elevenToFifteen = 0;
                object.sixteenAbove = 0;
                object.unknown = 0;
            }
            if (message.firstVisit != null && message.hasOwnProperty("firstVisit"))
                object.firstVisit = message.firstVisit;
            if (message.lessThanOne != null && message.hasOwnProperty("lessThanOne"))
                object.lessThanOne = message.lessThanOne;
            if (message.oneToFive != null && message.hasOwnProperty("oneToFive"))
                object.oneToFive = message.oneToFive;
            if (message.sixToTen != null && message.hasOwnProperty("sixToTen"))
                object.sixToTen = message.sixToTen;
            if (message.elevenToFifteen != null && message.hasOwnProperty("elevenToFifteen"))
                object.elevenToFifteen = message.elevenToFifteen;
            if (message.sixteenAbove != null && message.hasOwnProperty("sixteenAbove"))
                object.sixteenAbove = message.sixteenAbove;
            if (message.unknown != null && message.hasOwnProperty("unknown"))
                object.unknown = message.unknown;
            return object;
        };

        /**
         * Converts this repairLikelyHood to JSON.
         * @function toJSON
         * @memberof crystalballpb.repairLikelyHood
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        repairLikelyHood.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return repairLikelyHood;
    })();

    crystalballpb.AltSolutionsResponse = (function() {

        /**
         * Properties of an AltSolutionsResponse.
         * @memberof crystalballpb
         * @interface IAltSolutionsResponse
         * @property {Array.<crystalballpb.AltSolutionsResponse.Ifix>|null} [quickFix] AltSolutionsResponse quickFix
         * @property {Array.<crystalballpb.AltSolutionsResponse.Iissue>|null} [likelyIssue] AltSolutionsResponse likelyIssue
         */

        /**
         * Constructs a new AltSolutionsResponse.
         * @memberof crystalballpb
         * @classdesc Represents an AltSolutionsResponse.
         * @implements IAltSolutionsResponse
         * @constructor
         * @param {crystalballpb.IAltSolutionsResponse=} [properties] Properties to set
         */
        function AltSolutionsResponse(properties) {
            this.quickFix = [];
            this.likelyIssue = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AltSolutionsResponse quickFix.
         * @member {Array.<crystalballpb.AltSolutionsResponse.Ifix>} quickFix
         * @memberof crystalballpb.AltSolutionsResponse
         * @instance
         */
        AltSolutionsResponse.prototype.quickFix = $util.emptyArray;

        /**
         * AltSolutionsResponse likelyIssue.
         * @member {Array.<crystalballpb.AltSolutionsResponse.Iissue>} likelyIssue
         * @memberof crystalballpb.AltSolutionsResponse
         * @instance
         */
        AltSolutionsResponse.prototype.likelyIssue = $util.emptyArray;

        /**
         * Creates a new AltSolutionsResponse instance using the specified properties.
         * @function create
         * @memberof crystalballpb.AltSolutionsResponse
         * @static
         * @param {crystalballpb.IAltSolutionsResponse=} [properties] Properties to set
         * @returns {crystalballpb.AltSolutionsResponse} AltSolutionsResponse instance
         */
        AltSolutionsResponse.create = function create(properties) {
            return new AltSolutionsResponse(properties);
        };

        /**
         * Encodes the specified AltSolutionsResponse message. Does not implicitly {@link crystalballpb.AltSolutionsResponse.verify|verify} messages.
         * @function encode
         * @memberof crystalballpb.AltSolutionsResponse
         * @static
         * @param {crystalballpb.IAltSolutionsResponse} message AltSolutionsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AltSolutionsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.quickFix != null && message.quickFix.length)
                for (let i = 0; i < message.quickFix.length; ++i)
                    $root.crystalballpb.AltSolutionsResponse.fix.encode(message.quickFix[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.likelyIssue != null && message.likelyIssue.length)
                for (let i = 0; i < message.likelyIssue.length; ++i)
                    $root.crystalballpb.AltSolutionsResponse.issue.encode(message.likelyIssue[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AltSolutionsResponse message, length delimited. Does not implicitly {@link crystalballpb.AltSolutionsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof crystalballpb.AltSolutionsResponse
         * @static
         * @param {crystalballpb.IAltSolutionsResponse} message AltSolutionsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AltSolutionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AltSolutionsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof crystalballpb.AltSolutionsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {crystalballpb.AltSolutionsResponse} AltSolutionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AltSolutionsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crystalballpb.AltSolutionsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.quickFix && message.quickFix.length))
                        message.quickFix = [];
                    message.quickFix.push($root.crystalballpb.AltSolutionsResponse.fix.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.likelyIssue && message.likelyIssue.length))
                        message.likelyIssue = [];
                    message.likelyIssue.push($root.crystalballpb.AltSolutionsResponse.issue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AltSolutionsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof crystalballpb.AltSolutionsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {crystalballpb.AltSolutionsResponse} AltSolutionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AltSolutionsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AltSolutionsResponse message.
         * @function verify
         * @memberof crystalballpb.AltSolutionsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AltSolutionsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.quickFix != null && message.hasOwnProperty("quickFix")) {
                if (!Array.isArray(message.quickFix))
                    return "quickFix: array expected";
                for (let i = 0; i < message.quickFix.length; ++i) {
                    let error = $root.crystalballpb.AltSolutionsResponse.fix.verify(message.quickFix[i]);
                    if (error)
                        return "quickFix." + error;
                }
            }
            if (message.likelyIssue != null && message.hasOwnProperty("likelyIssue")) {
                if (!Array.isArray(message.likelyIssue))
                    return "likelyIssue: array expected";
                for (let i = 0; i < message.likelyIssue.length; ++i) {
                    let error = $root.crystalballpb.AltSolutionsResponse.issue.verify(message.likelyIssue[i]);
                    if (error)
                        return "likelyIssue." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AltSolutionsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof crystalballpb.AltSolutionsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {crystalballpb.AltSolutionsResponse} AltSolutionsResponse
         */
        AltSolutionsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.crystalballpb.AltSolutionsResponse)
                return object;
            let message = new $root.crystalballpb.AltSolutionsResponse();
            if (object.quickFix) {
                if (!Array.isArray(object.quickFix))
                    throw TypeError(".crystalballpb.AltSolutionsResponse.quickFix: array expected");
                message.quickFix = [];
                for (let i = 0; i < object.quickFix.length; ++i) {
                    if (typeof object.quickFix[i] !== "object")
                        throw TypeError(".crystalballpb.AltSolutionsResponse.quickFix: object expected");
                    message.quickFix[i] = $root.crystalballpb.AltSolutionsResponse.fix.fromObject(object.quickFix[i]);
                }
            }
            if (object.likelyIssue) {
                if (!Array.isArray(object.likelyIssue))
                    throw TypeError(".crystalballpb.AltSolutionsResponse.likelyIssue: array expected");
                message.likelyIssue = [];
                for (let i = 0; i < object.likelyIssue.length; ++i) {
                    if (typeof object.likelyIssue[i] !== "object")
                        throw TypeError(".crystalballpb.AltSolutionsResponse.likelyIssue: object expected");
                    message.likelyIssue[i] = $root.crystalballpb.AltSolutionsResponse.issue.fromObject(object.likelyIssue[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AltSolutionsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof crystalballpb.AltSolutionsResponse
         * @static
         * @param {crystalballpb.AltSolutionsResponse} message AltSolutionsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AltSolutionsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.quickFix = [];
                object.likelyIssue = [];
            }
            if (message.quickFix && message.quickFix.length) {
                object.quickFix = [];
                for (let j = 0; j < message.quickFix.length; ++j)
                    object.quickFix[j] = $root.crystalballpb.AltSolutionsResponse.fix.toObject(message.quickFix[j], options);
            }
            if (message.likelyIssue && message.likelyIssue.length) {
                object.likelyIssue = [];
                for (let j = 0; j < message.likelyIssue.length; ++j)
                    object.likelyIssue[j] = $root.crystalballpb.AltSolutionsResponse.issue.toObject(message.likelyIssue[j], options);
            }
            return object;
        };

        /**
         * Converts this AltSolutionsResponse to JSON.
         * @function toJSON
         * @memberof crystalballpb.AltSolutionsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AltSolutionsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AltSolutionsResponse.fix = (function() {

            /**
             * Properties of a fix.
             * @memberof crystalballpb.AltSolutionsResponse
             * @interface Ifix
             * @property {string|null} [description] fix description
             */

            /**
             * Constructs a new fix.
             * @memberof crystalballpb.AltSolutionsResponse
             * @classdesc Represents a fix.
             * @implements Ifix
             * @constructor
             * @param {crystalballpb.AltSolutionsResponse.Ifix=} [properties] Properties to set
             */
            function fix(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * fix description.
             * @member {string} description
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @instance
             */
            fix.prototype.description = "";

            /**
             * Creates a new fix instance using the specified properties.
             * @function create
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @static
             * @param {crystalballpb.AltSolutionsResponse.Ifix=} [properties] Properties to set
             * @returns {crystalballpb.AltSolutionsResponse.fix} fix instance
             */
            fix.create = function create(properties) {
                return new fix(properties);
            };

            /**
             * Encodes the specified fix message. Does not implicitly {@link crystalballpb.AltSolutionsResponse.fix.verify|verify} messages.
             * @function encode
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @static
             * @param {crystalballpb.AltSolutionsResponse.Ifix} message fix message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            fix.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.description);
                return writer;
            };

            /**
             * Encodes the specified fix message, length delimited. Does not implicitly {@link crystalballpb.AltSolutionsResponse.fix.verify|verify} messages.
             * @function encodeDelimited
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @static
             * @param {crystalballpb.AltSolutionsResponse.Ifix} message fix message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            fix.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a fix message from the specified reader or buffer.
             * @function decode
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {crystalballpb.AltSolutionsResponse.fix} fix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            fix.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crystalballpb.AltSolutionsResponse.fix();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.description = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a fix message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {crystalballpb.AltSolutionsResponse.fix} fix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            fix.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a fix message.
             * @function verify
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            fix.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };

            /**
             * Creates a fix message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {crystalballpb.AltSolutionsResponse.fix} fix
             */
            fix.fromObject = function fromObject(object) {
                if (object instanceof $root.crystalballpb.AltSolutionsResponse.fix)
                    return object;
                let message = new $root.crystalballpb.AltSolutionsResponse.fix();
                if (object.description != null)
                    message.description = String(object.description);
                return message;
            };

            /**
             * Creates a plain object from a fix message. Also converts values to other types if specified.
             * @function toObject
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @static
             * @param {crystalballpb.AltSolutionsResponse.fix} message fix
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            fix.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.description = "";
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };

            /**
             * Converts this fix to JSON.
             * @function toJSON
             * @memberof crystalballpb.AltSolutionsResponse.fix
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            fix.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return fix;
        })();

        AltSolutionsResponse.issue = (function() {

            /**
             * Properties of an issue.
             * @memberof crystalballpb.AltSolutionsResponse
             * @interface Iissue
             * @property {string|null} [id] issue id
             * @property {string|null} [name] issue name
             * @property {string|null} [description] issue description
             * @property {string|null} [diyUrl] issue diyUrl
             * @property {number|null} [cycleTimeMin] issue cycleTimeMin
             * @property {number|null} [cycleTimeMax] issue cycleTimeMax
             * @property {number|null} [cycleAverageDays] issue cycleAverageDays
             * @property {number|null} [serviceVisitsMin] issue serviceVisitsMin
             * @property {number|null} [serviceVisitsMax] issue serviceVisitsMax
             * @property {number|null} [firstRepairLikelihoodPercent] issue firstRepairLikelihoodPercent
             * @property {number|null} [replacementLikelihoodPercent] issue replacementLikelihoodPercent
             */

            /**
             * Constructs a new issue.
             * @memberof crystalballpb.AltSolutionsResponse
             * @classdesc Represents an issue.
             * @implements Iissue
             * @constructor
             * @param {crystalballpb.AltSolutionsResponse.Iissue=} [properties] Properties to set
             */
            function issue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * issue id.
             * @member {string} id
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.id = "";

            /**
             * issue name.
             * @member {string} name
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.name = "";

            /**
             * issue description.
             * @member {string} description
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.description = "";

            /**
             * issue diyUrl.
             * @member {string} diyUrl
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.diyUrl = "";

            /**
             * issue cycleTimeMin.
             * @member {number} cycleTimeMin
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.cycleTimeMin = 0;

            /**
             * issue cycleTimeMax.
             * @member {number} cycleTimeMax
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.cycleTimeMax = 0;

            /**
             * issue cycleAverageDays.
             * @member {number} cycleAverageDays
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.cycleAverageDays = 0;

            /**
             * issue serviceVisitsMin.
             * @member {number} serviceVisitsMin
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.serviceVisitsMin = 0;

            /**
             * issue serviceVisitsMax.
             * @member {number} serviceVisitsMax
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.serviceVisitsMax = 0;

            /**
             * issue firstRepairLikelihoodPercent.
             * @member {number} firstRepairLikelihoodPercent
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.firstRepairLikelihoodPercent = 0;

            /**
             * issue replacementLikelihoodPercent.
             * @member {number} replacementLikelihoodPercent
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             */
            issue.prototype.replacementLikelihoodPercent = 0;

            /**
             * Creates a new issue instance using the specified properties.
             * @function create
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @static
             * @param {crystalballpb.AltSolutionsResponse.Iissue=} [properties] Properties to set
             * @returns {crystalballpb.AltSolutionsResponse.issue} issue instance
             */
            issue.create = function create(properties) {
                return new issue(properties);
            };

            /**
             * Encodes the specified issue message. Does not implicitly {@link crystalballpb.AltSolutionsResponse.issue.verify|verify} messages.
             * @function encode
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @static
             * @param {crystalballpb.AltSolutionsResponse.Iissue} message issue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            issue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                if (message.diyUrl != null && Object.hasOwnProperty.call(message, "diyUrl"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.diyUrl);
                if (message.cycleTimeMin != null && Object.hasOwnProperty.call(message, "cycleTimeMin"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.cycleTimeMin);
                if (message.cycleTimeMax != null && Object.hasOwnProperty.call(message, "cycleTimeMax"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.cycleTimeMax);
                if (message.cycleAverageDays != null && Object.hasOwnProperty.call(message, "cycleAverageDays"))
                    writer.uint32(/* id 7, wireType 5 =*/61).float(message.cycleAverageDays);
                if (message.serviceVisitsMin != null && Object.hasOwnProperty.call(message, "serviceVisitsMin"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.serviceVisitsMin);
                if (message.serviceVisitsMax != null && Object.hasOwnProperty.call(message, "serviceVisitsMax"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.serviceVisitsMax);
                if (message.firstRepairLikelihoodPercent != null && Object.hasOwnProperty.call(message, "firstRepairLikelihoodPercent"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.firstRepairLikelihoodPercent);
                if (message.replacementLikelihoodPercent != null && Object.hasOwnProperty.call(message, "replacementLikelihoodPercent"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.replacementLikelihoodPercent);
                return writer;
            };

            /**
             * Encodes the specified issue message, length delimited. Does not implicitly {@link crystalballpb.AltSolutionsResponse.issue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @static
             * @param {crystalballpb.AltSolutionsResponse.Iissue} message issue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            issue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an issue message from the specified reader or buffer.
             * @function decode
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {crystalballpb.AltSolutionsResponse.issue} issue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            issue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.crystalballpb.AltSolutionsResponse.issue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.description = reader.string();
                        break;
                    case 4:
                        message.diyUrl = reader.string();
                        break;
                    case 5:
                        message.cycleTimeMin = reader.uint32();
                        break;
                    case 6:
                        message.cycleTimeMax = reader.uint32();
                        break;
                    case 7:
                        message.cycleAverageDays = reader.float();
                        break;
                    case 8:
                        message.serviceVisitsMin = reader.uint32();
                        break;
                    case 9:
                        message.serviceVisitsMax = reader.uint32();
                        break;
                    case 10:
                        message.firstRepairLikelihoodPercent = reader.uint32();
                        break;
                    case 11:
                        message.replacementLikelihoodPercent = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an issue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {crystalballpb.AltSolutionsResponse.issue} issue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            issue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an issue message.
             * @function verify
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            issue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (message.diyUrl != null && message.hasOwnProperty("diyUrl"))
                    if (!$util.isString(message.diyUrl))
                        return "diyUrl: string expected";
                if (message.cycleTimeMin != null && message.hasOwnProperty("cycleTimeMin"))
                    if (!$util.isInteger(message.cycleTimeMin))
                        return "cycleTimeMin: integer expected";
                if (message.cycleTimeMax != null && message.hasOwnProperty("cycleTimeMax"))
                    if (!$util.isInteger(message.cycleTimeMax))
                        return "cycleTimeMax: integer expected";
                if (message.cycleAverageDays != null && message.hasOwnProperty("cycleAverageDays"))
                    if (typeof message.cycleAverageDays !== "number")
                        return "cycleAverageDays: number expected";
                if (message.serviceVisitsMin != null && message.hasOwnProperty("serviceVisitsMin"))
                    if (!$util.isInteger(message.serviceVisitsMin))
                        return "serviceVisitsMin: integer expected";
                if (message.serviceVisitsMax != null && message.hasOwnProperty("serviceVisitsMax"))
                    if (!$util.isInteger(message.serviceVisitsMax))
                        return "serviceVisitsMax: integer expected";
                if (message.firstRepairLikelihoodPercent != null && message.hasOwnProperty("firstRepairLikelihoodPercent"))
                    if (!$util.isInteger(message.firstRepairLikelihoodPercent))
                        return "firstRepairLikelihoodPercent: integer expected";
                if (message.replacementLikelihoodPercent != null && message.hasOwnProperty("replacementLikelihoodPercent"))
                    if (!$util.isInteger(message.replacementLikelihoodPercent))
                        return "replacementLikelihoodPercent: integer expected";
                return null;
            };

            /**
             * Creates an issue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {crystalballpb.AltSolutionsResponse.issue} issue
             */
            issue.fromObject = function fromObject(object) {
                if (object instanceof $root.crystalballpb.AltSolutionsResponse.issue)
                    return object;
                let message = new $root.crystalballpb.AltSolutionsResponse.issue();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.description != null)
                    message.description = String(object.description);
                if (object.diyUrl != null)
                    message.diyUrl = String(object.diyUrl);
                if (object.cycleTimeMin != null)
                    message.cycleTimeMin = object.cycleTimeMin >>> 0;
                if (object.cycleTimeMax != null)
                    message.cycleTimeMax = object.cycleTimeMax >>> 0;
                if (object.cycleAverageDays != null)
                    message.cycleAverageDays = Number(object.cycleAverageDays);
                if (object.serviceVisitsMin != null)
                    message.serviceVisitsMin = object.serviceVisitsMin >>> 0;
                if (object.serviceVisitsMax != null)
                    message.serviceVisitsMax = object.serviceVisitsMax >>> 0;
                if (object.firstRepairLikelihoodPercent != null)
                    message.firstRepairLikelihoodPercent = object.firstRepairLikelihoodPercent >>> 0;
                if (object.replacementLikelihoodPercent != null)
                    message.replacementLikelihoodPercent = object.replacementLikelihoodPercent >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an issue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @static
             * @param {crystalballpb.AltSolutionsResponse.issue} message issue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            issue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.description = "";
                    object.diyUrl = "";
                    object.cycleTimeMin = 0;
                    object.cycleTimeMax = 0;
                    object.cycleAverageDays = 0;
                    object.serviceVisitsMin = 0;
                    object.serviceVisitsMax = 0;
                    object.firstRepairLikelihoodPercent = 0;
                    object.replacementLikelihoodPercent = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                if (message.diyUrl != null && message.hasOwnProperty("diyUrl"))
                    object.diyUrl = message.diyUrl;
                if (message.cycleTimeMin != null && message.hasOwnProperty("cycleTimeMin"))
                    object.cycleTimeMin = message.cycleTimeMin;
                if (message.cycleTimeMax != null && message.hasOwnProperty("cycleTimeMax"))
                    object.cycleTimeMax = message.cycleTimeMax;
                if (message.cycleAverageDays != null && message.hasOwnProperty("cycleAverageDays"))
                    object.cycleAverageDays = options.json && !isFinite(message.cycleAverageDays) ? String(message.cycleAverageDays) : message.cycleAverageDays;
                if (message.serviceVisitsMin != null && message.hasOwnProperty("serviceVisitsMin"))
                    object.serviceVisitsMin = message.serviceVisitsMin;
                if (message.serviceVisitsMax != null && message.hasOwnProperty("serviceVisitsMax"))
                    object.serviceVisitsMax = message.serviceVisitsMax;
                if (message.firstRepairLikelihoodPercent != null && message.hasOwnProperty("firstRepairLikelihoodPercent"))
                    object.firstRepairLikelihoodPercent = message.firstRepairLikelihoodPercent;
                if (message.replacementLikelihoodPercent != null && message.hasOwnProperty("replacementLikelihoodPercent"))
                    object.replacementLikelihoodPercent = message.replacementLikelihoodPercent;
                return object;
            };

            /**
             * Converts this issue to JSON.
             * @function toJSON
             * @memberof crystalballpb.AltSolutionsResponse.issue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            issue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return issue;
        })();

        return AltSolutionsResponse;
    })();

    return crystalballpb;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
