"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getContents = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`https://api.learnhub.thanayut.in.th/content`);
        const contentList = response.data.data;
        const MapList = contentList.filter((value) => {
            if (new Date(value.createdAt).valueOf() <=
                new Date("2023-05-16T07:14:52.000Z").valueOf())
                return value;
        });
        console.log(JSON.stringify(MapList, null, 2));
    }
    catch (error) {
        console.error(error);
    }
});
getContents();
