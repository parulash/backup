import * as $protobuf from "protobufjs";
/** Namespace crystalballpb. */
export namespace crystalballpb {

    /** Properties of an AltSolutionsRequest. */
    interface IAltSolutionsRequest {

        /** AltSolutionsRequest symptomId */
        symptomId?: (string|null);

        /** AltSolutionsRequest styleId */
        styleId?: (string[]|null);

        /** AltSolutionsRequest marketShortName */
        marketShortName?: (string|null);
    }

    /** Represents an AltSolutionsRequest. */
    class AltSolutionsRequest implements IAltSolutionsRequest {

        /**
         * Constructs a new AltSolutionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: crystalballpb.IAltSolutionsRequest);

        /** AltSolutionsRequest symptomId. */
        public symptomId: string;

        /** AltSolutionsRequest styleId. */
        public styleId: string[];

        /** AltSolutionsRequest marketShortName. */
        public marketShortName: string;

        /**
         * Creates a new AltSolutionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AltSolutionsRequest instance
         */
        public static create(properties?: crystalballpb.IAltSolutionsRequest): crystalballpb.AltSolutionsRequest;

        /**
         * Encodes the specified AltSolutionsRequest message. Does not implicitly {@link crystalballpb.AltSolutionsRequest.verify|verify} messages.
         * @param message AltSolutionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: crystalballpb.IAltSolutionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AltSolutionsRequest message, length delimited. Does not implicitly {@link crystalballpb.AltSolutionsRequest.verify|verify} messages.
         * @param message AltSolutionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: crystalballpb.IAltSolutionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AltSolutionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AltSolutionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crystalballpb.AltSolutionsRequest;

        /**
         * Decodes an AltSolutionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AltSolutionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crystalballpb.AltSolutionsRequest;

        /**
         * Verifies an AltSolutionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AltSolutionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AltSolutionsRequest
         */
        public static fromObject(object: { [k: string]: any }): crystalballpb.AltSolutionsRequest;

        /**
         * Creates a plain object from an AltSolutionsRequest message. Also converts values to other types if specified.
         * @param message AltSolutionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: crystalballpb.AltSolutionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AltSolutionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SymptomStatsRequest. */
    interface ISymptomStatsRequest {

        /** SymptomStatsRequest symptomId */
        symptomId?: (string|null);

        /** SymptomStatsRequest marketShortName */
        marketShortName?: (string|null);
    }

    /** Represents a SymptomStatsRequest. */
    class SymptomStatsRequest implements ISymptomStatsRequest {

        /**
         * Constructs a new SymptomStatsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: crystalballpb.ISymptomStatsRequest);

        /** SymptomStatsRequest symptomId. */
        public symptomId: string;

        /** SymptomStatsRequest marketShortName. */
        public marketShortName: string;

        /**
         * Creates a new SymptomStatsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymptomStatsRequest instance
         */
        public static create(properties?: crystalballpb.ISymptomStatsRequest): crystalballpb.SymptomStatsRequest;

        /**
         * Encodes the specified SymptomStatsRequest message. Does not implicitly {@link crystalballpb.SymptomStatsRequest.verify|verify} messages.
         * @param message SymptomStatsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: crystalballpb.ISymptomStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymptomStatsRequest message, length delimited. Does not implicitly {@link crystalballpb.SymptomStatsRequest.verify|verify} messages.
         * @param message SymptomStatsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: crystalballpb.ISymptomStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymptomStatsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymptomStatsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crystalballpb.SymptomStatsRequest;

        /**
         * Decodes a SymptomStatsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymptomStatsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crystalballpb.SymptomStatsRequest;

        /**
         * Verifies a SymptomStatsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymptomStatsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymptomStatsRequest
         */
        public static fromObject(object: { [k: string]: any }): crystalballpb.SymptomStatsRequest;

        /**
         * Creates a plain object from a SymptomStatsRequest message. Also converts values to other types if specified.
         * @param message SymptomStatsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: crystalballpb.SymptomStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymptomStatsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SymptomStatsResponse. */
    interface ISymptomStatsResponse {

        /** SymptomStatsResponse symptomID */
        symptomID?: (string|null);

        /** SymptomStatsResponse marketShortName */
        marketShortName?: (string|null);

        /** SymptomStatsResponse checkFirst */
        checkFirst?: (string[]|null);

        /** SymptomStatsResponse diyUrl */
        diyUrl?: (string|null);

        /** SymptomStatsResponse cycleMinDays */
        cycleMinDays?: (number|null);

        /** SymptomStatsResponse cycleMaxDays */
        cycleMaxDays?: (number|null);

        /** SymptomStatsResponse cycleAverageDays */
        cycleAverageDays?: (number|null);

        /** SymptomStatsResponse repairCostMin */
        repairCostMin?: (number|null);

        /** SymptomStatsResponse repairCostMax */
        repairCostMax?: (number|null);

        /** SymptomStatsResponse replaceCostMin */
        replaceCostMin?: (number|null);

        /** SymptomStatsResponse replaceCostMax */
        replaceCostMax?: (number|null);

        /** SymptomStatsResponse repairLikelyhood */
        repairLikelyhood?: (crystalballpb.IrepairLikelyHood|null);

        /** SymptomStatsResponse serviceType */
        serviceType?: (string|null);
    }

    /** Represents a SymptomStatsResponse. */
    class SymptomStatsResponse implements ISymptomStatsResponse {

        /**
         * Constructs a new SymptomStatsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: crystalballpb.ISymptomStatsResponse);

        /** SymptomStatsResponse symptomID. */
        public symptomID: string;

        /** SymptomStatsResponse marketShortName. */
        public marketShortName: string;

        /** SymptomStatsResponse checkFirst. */
        public checkFirst: string[];

        /** SymptomStatsResponse diyUrl. */
        public diyUrl: string;

        /** SymptomStatsResponse cycleMinDays. */
        public cycleMinDays: number;

        /** SymptomStatsResponse cycleMaxDays. */
        public cycleMaxDays: number;

        /** SymptomStatsResponse cycleAverageDays. */
        public cycleAverageDays: number;

        /** SymptomStatsResponse repairCostMin. */
        public repairCostMin: number;

        /** SymptomStatsResponse repairCostMax. */
        public repairCostMax: number;

        /** SymptomStatsResponse replaceCostMin. */
        public replaceCostMin: number;

        /** SymptomStatsResponse replaceCostMax. */
        public replaceCostMax: number;

        /** SymptomStatsResponse repairLikelyhood. */
        public repairLikelyhood?: (crystalballpb.IrepairLikelyHood|null);

        /** SymptomStatsResponse serviceType. */
        public serviceType: string;

        /**
         * Creates a new SymptomStatsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymptomStatsResponse instance
         */
        public static create(properties?: crystalballpb.ISymptomStatsResponse): crystalballpb.SymptomStatsResponse;

        /**
         * Encodes the specified SymptomStatsResponse message. Does not implicitly {@link crystalballpb.SymptomStatsResponse.verify|verify} messages.
         * @param message SymptomStatsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: crystalballpb.ISymptomStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymptomStatsResponse message, length delimited. Does not implicitly {@link crystalballpb.SymptomStatsResponse.verify|verify} messages.
         * @param message SymptomStatsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: crystalballpb.ISymptomStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymptomStatsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymptomStatsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crystalballpb.SymptomStatsResponse;

        /**
         * Decodes a SymptomStatsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymptomStatsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crystalballpb.SymptomStatsResponse;

        /**
         * Verifies a SymptomStatsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymptomStatsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymptomStatsResponse
         */
        public static fromObject(object: { [k: string]: any }): crystalballpb.SymptomStatsResponse;

        /**
         * Creates a plain object from a SymptomStatsResponse message. Also converts values to other types if specified.
         * @param message SymptomStatsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: crystalballpb.SymptomStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymptomStatsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a repairLikelyHood. */
    interface IrepairLikelyHood {

        /** repairLikelyHood firstVisit */
        firstVisit?: (number|null);

        /** repairLikelyHood lessThanOne */
        lessThanOne?: (number|null);

        /** repairLikelyHood oneToFive */
        oneToFive?: (number|null);

        /** repairLikelyHood sixToTen */
        sixToTen?: (number|null);

        /** repairLikelyHood elevenToFifteen */
        elevenToFifteen?: (number|null);

        /** repairLikelyHood sixteenAbove */
        sixteenAbove?: (number|null);

        /** repairLikelyHood unknown */
        unknown?: (number|null);
    }

    /** Represents a repairLikelyHood. */
    class repairLikelyHood implements IrepairLikelyHood {

        /**
         * Constructs a new repairLikelyHood.
         * @param [properties] Properties to set
         */
        constructor(properties?: crystalballpb.IrepairLikelyHood);

        /** repairLikelyHood firstVisit. */
        public firstVisit: number;

        /** repairLikelyHood lessThanOne. */
        public lessThanOne: number;

        /** repairLikelyHood oneToFive. */
        public oneToFive: number;

        /** repairLikelyHood sixToTen. */
        public sixToTen: number;

        /** repairLikelyHood elevenToFifteen. */
        public elevenToFifteen: number;

        /** repairLikelyHood sixteenAbove. */
        public sixteenAbove: number;

        /** repairLikelyHood unknown. */
        public unknown: number;

        /**
         * Creates a new repairLikelyHood instance using the specified properties.
         * @param [properties] Properties to set
         * @returns repairLikelyHood instance
         */
        public static create(properties?: crystalballpb.IrepairLikelyHood): crystalballpb.repairLikelyHood;

        /**
         * Encodes the specified repairLikelyHood message. Does not implicitly {@link crystalballpb.repairLikelyHood.verify|verify} messages.
         * @param message repairLikelyHood message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: crystalballpb.IrepairLikelyHood, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified repairLikelyHood message, length delimited. Does not implicitly {@link crystalballpb.repairLikelyHood.verify|verify} messages.
         * @param message repairLikelyHood message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: crystalballpb.IrepairLikelyHood, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a repairLikelyHood message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns repairLikelyHood
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crystalballpb.repairLikelyHood;

        /**
         * Decodes a repairLikelyHood message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns repairLikelyHood
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crystalballpb.repairLikelyHood;

        /**
         * Verifies a repairLikelyHood message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a repairLikelyHood message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns repairLikelyHood
         */
        public static fromObject(object: { [k: string]: any }): crystalballpb.repairLikelyHood;

        /**
         * Creates a plain object from a repairLikelyHood message. Also converts values to other types if specified.
         * @param message repairLikelyHood
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: crystalballpb.repairLikelyHood, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this repairLikelyHood to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AltSolutionsResponse. */
    interface IAltSolutionsResponse {

        /** AltSolutionsResponse quickFix */
        quickFix?: (crystalballpb.AltSolutionsResponse.Ifix[]|null);

        /** AltSolutionsResponse likelyIssue */
        likelyIssue?: (crystalballpb.AltSolutionsResponse.Iissue[]|null);
    }

    /** Represents an AltSolutionsResponse. */
    class AltSolutionsResponse implements IAltSolutionsResponse {

        /**
         * Constructs a new AltSolutionsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: crystalballpb.IAltSolutionsResponse);

        /** AltSolutionsResponse quickFix. */
        public quickFix: crystalballpb.AltSolutionsResponse.Ifix[];

        /** AltSolutionsResponse likelyIssue. */
        public likelyIssue: crystalballpb.AltSolutionsResponse.Iissue[];

        /**
         * Creates a new AltSolutionsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AltSolutionsResponse instance
         */
        public static create(properties?: crystalballpb.IAltSolutionsResponse): crystalballpb.AltSolutionsResponse;

        /**
         * Encodes the specified AltSolutionsResponse message. Does not implicitly {@link crystalballpb.AltSolutionsResponse.verify|verify} messages.
         * @param message AltSolutionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: crystalballpb.IAltSolutionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AltSolutionsResponse message, length delimited. Does not implicitly {@link crystalballpb.AltSolutionsResponse.verify|verify} messages.
         * @param message AltSolutionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: crystalballpb.IAltSolutionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AltSolutionsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AltSolutionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crystalballpb.AltSolutionsResponse;

        /**
         * Decodes an AltSolutionsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AltSolutionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crystalballpb.AltSolutionsResponse;

        /**
         * Verifies an AltSolutionsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AltSolutionsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AltSolutionsResponse
         */
        public static fromObject(object: { [k: string]: any }): crystalballpb.AltSolutionsResponse;

        /**
         * Creates a plain object from an AltSolutionsResponse message. Also converts values to other types if specified.
         * @param message AltSolutionsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: crystalballpb.AltSolutionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AltSolutionsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace AltSolutionsResponse {

        /** Properties of a fix. */
        interface Ifix {

            /** fix description */
            description?: (string|null);
        }

        /** Represents a fix. */
        class fix implements Ifix {

            /**
             * Constructs a new fix.
             * @param [properties] Properties to set
             */
            constructor(properties?: crystalballpb.AltSolutionsResponse.Ifix);

            /** fix description. */
            public description: string;

            /**
             * Creates a new fix instance using the specified properties.
             * @param [properties] Properties to set
             * @returns fix instance
             */
            public static create(properties?: crystalballpb.AltSolutionsResponse.Ifix): crystalballpb.AltSolutionsResponse.fix;

            /**
             * Encodes the specified fix message. Does not implicitly {@link crystalballpb.AltSolutionsResponse.fix.verify|verify} messages.
             * @param message fix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: crystalballpb.AltSolutionsResponse.Ifix, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified fix message, length delimited. Does not implicitly {@link crystalballpb.AltSolutionsResponse.fix.verify|verify} messages.
             * @param message fix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: crystalballpb.AltSolutionsResponse.Ifix, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a fix message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns fix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crystalballpb.AltSolutionsResponse.fix;

            /**
             * Decodes a fix message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns fix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crystalballpb.AltSolutionsResponse.fix;

            /**
             * Verifies a fix message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a fix message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns fix
             */
            public static fromObject(object: { [k: string]: any }): crystalballpb.AltSolutionsResponse.fix;

            /**
             * Creates a plain object from a fix message. Also converts values to other types if specified.
             * @param message fix
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: crystalballpb.AltSolutionsResponse.fix, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this fix to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an issue. */
        interface Iissue {

            /** issue id */
            id?: (string|null);

            /** issue name */
            name?: (string|null);

            /** issue description */
            description?: (string|null);

            /** issue diyUrl */
            diyUrl?: (string|null);

            /** issue cycleTimeMin */
            cycleTimeMin?: (number|null);

            /** issue cycleTimeMax */
            cycleTimeMax?: (number|null);

            /** issue cycleAverageDays */
            cycleAverageDays?: (number|null);

            /** issue serviceVisitsMin */
            serviceVisitsMin?: (number|null);

            /** issue serviceVisitsMax */
            serviceVisitsMax?: (number|null);

            /** issue firstRepairLikelihoodPercent */
            firstRepairLikelihoodPercent?: (number|null);

            /** issue replacementLikelihoodPercent */
            replacementLikelihoodPercent?: (number|null);
        }

        /** Represents an issue. */
        class issue implements Iissue {

            /**
             * Constructs a new issue.
             * @param [properties] Properties to set
             */
            constructor(properties?: crystalballpb.AltSolutionsResponse.Iissue);

            /** issue id. */
            public id: string;

            /** issue name. */
            public name: string;

            /** issue description. */
            public description: string;

            /** issue diyUrl. */
            public diyUrl: string;

            /** issue cycleTimeMin. */
            public cycleTimeMin: number;

            /** issue cycleTimeMax. */
            public cycleTimeMax: number;

            /** issue cycleAverageDays. */
            public cycleAverageDays: number;

            /** issue serviceVisitsMin. */
            public serviceVisitsMin: number;

            /** issue serviceVisitsMax. */
            public serviceVisitsMax: number;

            /** issue firstRepairLikelihoodPercent. */
            public firstRepairLikelihoodPercent: number;

            /** issue replacementLikelihoodPercent. */
            public replacementLikelihoodPercent: number;

            /**
             * Creates a new issue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns issue instance
             */
            public static create(properties?: crystalballpb.AltSolutionsResponse.Iissue): crystalballpb.AltSolutionsResponse.issue;

            /**
             * Encodes the specified issue message. Does not implicitly {@link crystalballpb.AltSolutionsResponse.issue.verify|verify} messages.
             * @param message issue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: crystalballpb.AltSolutionsResponse.Iissue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified issue message, length delimited. Does not implicitly {@link crystalballpb.AltSolutionsResponse.issue.verify|verify} messages.
             * @param message issue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: crystalballpb.AltSolutionsResponse.Iissue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an issue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns issue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crystalballpb.AltSolutionsResponse.issue;

            /**
             * Decodes an issue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns issue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crystalballpb.AltSolutionsResponse.issue;

            /**
             * Verifies an issue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an issue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns issue
             */
            public static fromObject(object: { [k: string]: any }): crystalballpb.AltSolutionsResponse.issue;

            /**
             * Creates a plain object from an issue message. Also converts values to other types if specified.
             * @param message issue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: crystalballpb.AltSolutionsResponse.issue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this issue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
