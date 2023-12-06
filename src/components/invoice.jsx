'use client'

import {useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import Logo from "@/assets/Logo.png"
import Image from "next/image";

const data = {
    "orderCode": "211813RAHMMS412HG",
    "Orders": [
        {
            "id": "656e17e5da80e5d9003bccd0",
            "customerId": "656e17e5da80e5d9003bcccf",
            "personelId": "656e17e5da80e5d9003bccce",
            "orderCode": "211813RAHMMS412HG",
            "invalidDate": "2023-12-14T18:18:13.373Z",
            "stock": 5,
            "orderNote": "5 tane aslan koltuk eklendi",
            "productId": "65437ceee29190a1e9d61e75",
            "createdAt": "2023-12-04T18:18:13.575Z",
            "updatedAt": "2023-12-04T18:18:13.575Z"
        },
        {
            "id": "656e17e5da80e5d9003bccd0",
            "customerId": "656e17e5da80e5d9003bcccf",
            "personelId": "656e17e5da80e5d9003bccce",
            "orderCode": "211813RAHMMS412HG",
            "invalidDate": "2023-12-14T18:18:13.373Z",
            "stock": 5,
            "orderNote": "5 tane aslan koltuk eklendi",
            "productId": "65437ceee29190a1e9d61e75",
            "createdAt": "2023-12-04T18:18:13.575Z",
            "updatedAt": "2023-12-04T18:18:13.575Z"
        },
        {
            "id": "656e17e5da80e5d9003bccd0",
            "customerId": "656e17e5da80e5d9003bcccf",
            "personelId": "656e17e5da80e5d9003bccce",
            "orderCode": "211813RAHMMS412HG",
            "invalidDate": "2023-12-14T18:18:13.373Z",
            "stock": 5,
            "orderNote": "5 tane aslan koltuk eklendi",
            "productId": "65437ceee29190a1e9d61e75",
            "createdAt": "2023-12-04T18:18:13.575Z",
            "updatedAt": "2023-12-04T18:18:13.575Z"
        }, {
            "id": "656e17e5da80e5d9003bccd0",
            "customerId": "656e17e5da80e5d9003bcccf",
            "personelId": "656e17e5da80e5d9003bccce",
            "orderCode": "211813RAHMMS412HG",
            "invalidDate": "2023-12-14T18:18:13.373Z",
            "stock": 5,
            "orderNote": "5 tane aslan koltuk eklendi",
            "productId": "65437ceee29190a1e9d61e75",
            "createdAt": "2023-12-04T18:18:13.575Z",
            "updatedAt": "2023-12-04T18:18:13.575Z"
        }, {
            "id": "656e17e5da80e5d9003bccd0",
            "customerId": "656e17e5da80e5d9003bcccf",
            "personelId": "656e17e5da80e5d9003bccce",
            "orderCode": "211813RAHMMS412HG",
            "invalidDate": "2023-12-14T18:18:13.373Z",
            "stock": 5,
            "orderNote": "5 tane aslan koltuk eklendi",
            "productId": "65437ceee29190a1e9d61e75",
            "createdAt": "2023-12-04T18:18:13.575Z",
            "updatedAt": "2023-12-04T18:18:13.575Z"
        },
        {
            "id": "656e17e5da80e5d9003bccd0",
            "customerId": "656e17e5da80e5d9003bcccf",
            "personelId": "656e17e5da80e5d9003bccce",
            "orderCode": "211813RAHMMS412HG",
            "invalidDate": "2023-12-14T18:18:13.373Z",
            "stock": 5,
            "orderNote": "5 tane aslan koltuk eklendi",
            "productId": "65437ceee29190a1e9d61e75",
            "createdAt": "2023-12-04T18:18:13.575Z",
            "updatedAt": "2023-12-04T18:18:13.575Z"
        }


    ],
    "Renkler": [
        {
            "id": "65351ec560f49da759f3e100",
            "colourType": "1",
            "colourDescription": "",
            "translateEnabled": false,
            "colourPickerEnabled": false,
            "colourHex": "rgb(122, 23, 28)",
            "colourTypeTurkish": "",
            "colourTypeUkrainian": "",
            "colourTypeEnglish": "",
            "colourDescriptionTurkish": "",
            "colourDescriptionUkrainian": "",
            "colourDescriptionEnglish": "",
            "createdAt": "2023-10-22T13:08:21.277Z",
            "updatedAt": "2023-10-22T13:08:21.277Z",
            "orderId": "656e17e5da80e5d9003bccd0"
        }
    ],
    "Kumaşlar": [
        {
            "id": "6535202160f49da759f3e102",
            "fabricType": "a1",
            "fabricDescription": "a1",
            "fabricSwatch": "a1",
            "image": "",
            "translateEnabled": false,
            "addSwatchEnabled": true,
            "fabricTypeTurkish": "",
            "fabricTypeUkrainian": "",
            "fabricTypeEnglish": "",
            "fabricDescriptionTurkish": "",
            "fabricDescriptionUkrainian": "",
            "fabricDescriptionEnglish": "",
            "fabricSwatchTurkish": "",
            "fabricSwatchUkrainian": "",
            "fabricSwatchEnglish": "",
            "createdAt": "2023-10-22T13:14:09.990Z",
            "updatedAt": "2023-10-22T13:14:09.990Z",
            "orderId": "656e17e5da80e5d9003bccd0"
        }
    ],
    "Ölçüler": [
        {
            "id": "6530c77af6f7eab66c849a03",
            "firstValue": "1",
            "secondValue": "",
            "unit": "cm",
            "oneRangeEnabled": false,
            "twoRangeEnabled": true,
            "manuelDefined": false,
            "translateEnabled": null,
            "turkish": "",
            "ukrainian": "",
            "english": "",
            "createdAt": "2023-10-19T06:06:50.418Z",
            "updatedAt": "2023-10-19T06:06:50.418Z",
            "orderId": "656e17e5da80e5d9003bccd0"
        }
    ],
    "Metaller": [
        {
            "id": "6535205c60f49da759f3e104",
            "metalType": "a1",
            "metalDescription": "",
            "image": "",
            "translateEnabled": false,
            "metalTypeTurkish": "",
            "metalTypeUkrainian": "",
            "metalTypeEnglish": "",
            "metalDescriptionTurkish": "",
            "metalDescriptionUkrainian": "",
            "metalDescriptionEnglish": "",
            "createdAt": "2023-10-22T13:15:08.046Z",
            "updatedAt": "2023-10-22T13:15:08.046Z",
            "orderId": "656e17e5da80e5d9003bccd0"
        }
    ],
    "Extralar": [
        {
            "id": "65437cf0e29190a1e9d61e8a",
            "index": 0,
            "feature": "Extra",
            "featureId": "ekstra",
            "targetValue": "standard",
            "checked": true,
            "value": null,
            "imageValue": null,
            "extraValue": "ekstra 1",
            "productId": "65437ceee29190a1e9d61e75",
            "productName": "Aslan Koltuk",
            "productType": "koltuk",
            "productPrice": "1500",
            "selectedCategoryKey": "furniture",
            "selectedCategoryValues": "Mobilya",
            "createdAt": "2023-11-02T10:41:50.721Z",
            "updatedAt": "2023-11-02T10:41:50.721Z",
            "orderId": "656e17e5da80e5d9003bccd0"
        }
    ]
}

const langs = {
    order: {
        tr: "SIRA",
        uk: "ПОРЯДОК",
        en: "ORDER",
    },
    image: {
        tr: "RESİM",
        uk: "ЗОБРАЖЕННЯ",
        en: "IMAGE",
    },
    productFeatures: {
        tr: "ÜRÜN ÖZELLİKLERİ",
        uk: "ХАРАКТЕРИСТИКИ ТОВАРУ",
        en: "PRODUCT FEATURES",
    },
    price: {
        tr: "FİYAT",
        uk: "ЦІНА",
        en: "PRICE",
    },
    quantity: {
        tr: "ADET",
        uk: "КІЛЬ",
        en: "QUANTITY",
    },
    total: {
        tr: "TOPLAM",
        uk: "СУМА",
        en: "TOTAL",
    },
    notFound: {
        tr: "Bulunamadı",
        uk: "Не знайдено",
        en: "Not Found",
    },
    teklifNo: {
        tr: "Teklif no",
        uk: "Тендер №",
        en: "Quotation No",
    },
    invoice: {
        tr: "Fatura",
        uk: "Рахунок",
        en: "Invoice",
    },
    date: {
        tr: "Tarih",
        uk: "Дата",
        en: "Date",
    },
    firmaBilgileri: {
        tr: "Firma Bilgileri",
        uk: "Інформація про компанію",
        en: "Company Information",
    },
    toplam: {
        tr: "Toplam",
        uk: "Всього",
        en: "Total",
    },
    vergi: {
        tr: "Vergi",
        uk: "Податок",
        en: "Tax",
    },
    genelToplam: {
        tr: "Genel Toplam",
        uk: "Загальна сума",
        en: "Grand Total",
    },
};

const selectedLang = "uk"

const Invoice = () => {
    const printRef = useRef(null)

    function filterDataByOrderId() {
        const res = {
            order_no: data.orderCode,
            products: []
        }

        data.Orders.forEach(value => {
            const pr_id = value.id

            let x_d = {
                note: value.orderNote
            }

            data.Extralar
                .filter(x_f => x_f.orderId === pr_id)
                .forEach(x_m => {
                    x_d = {
                        ...x_d,
                        info: x_m.productType,
                        quantity: Number(value.stock),
                        price: Number(x_m.productPrice),
                        totalPrice: Number(value.stock) * Number(x_m.productPrice),
                        id: x_m.productId,
                        name: x_m.productName,
                    }
                })

            data.Kumaşlar
                .filter(x_f => x_f.orderId === pr_id)
                .forEach(x_k => {
                    x_d = {
                        ...x_d,
                        extras: x_d?.extras ? [...x_d.extras, {
                            name: "Kumaş",
                            value: x_k.fabricType
                        }] : [{
                            name: "Kumaş",
                            value: x_k.fabricType
                        }]
                    }
                })

            data.Metaller
                .filter(x_f => x_f.orderId === pr_id)
                .forEach(x_m => {
                    x_d = {
                        ...x_d,
                        extras: x_d?.extras ? [...x_d.extras, {
                            name: "Metal",
                            value: x_m.metalType
                        }] : [{
                            name: "Metal",
                            value: x_m.metalType
                        }]
                    }
                })

            data.Renkler
                .filter(x_f => x_f.orderId === pr_id)
                .forEach(x_m => {
                    x_d = {
                        ...x_d,
                        extras: x_d?.extras ? [...x_d.extras, {
                            name: "Renk",
                            value: x_m.colourHex
                        }] : [{
                            name: "Renk",
                            value: x_m.colourHex
                        }]
                    }
                })

            data.Ölçüler
                .filter(x_f => x_f.orderId === pr_id)
                .forEach(x_m => {
                    const formated = x_m.firstValue + x_m.unit + x_m.secondValue

                    x_d = {
                        ...x_d,
                        extras: x_d?.extras ? [...x_d.extras, {
                            name: "Ölçü",
                            value: formated
                        }] : [{
                            name: "Ölçü",
                            value: formated
                        }]
                    }
                })

            res.products.push(x_d);
        });

        return res;
    }

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        pageStyle: `
        @page {
            margin: 5%;
        }
        `,

    })

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("uk-UA", {
            currency: "UAH",
            minimumFractionDigits: 2,
        }).format(amount);
    };

    const calculateTotals = (taxRate, products) => {
        let total = 0;
        let tax = 0;

        products.forEach(product => {
            total += product.totalPrice
        });

        tax = total * (taxRate / 100);

        const grandTotal = total + tax;

        return {
            total: formatCurrency(total),
            tax: formatCurrency(tax),
            grandTotal: formatCurrency(grandTotal),
        };
    };

    const details = filterDataByOrderId()
    const total = calculateTotals(16, details.products)

    return <div className="flex flex-col w-fit h-fit gap-6 relative">
        <button
            className="px-8 py-2 fixed top-8 right-8 bg-green-500 text-white font-bold rounded-md hover:opacity-75 transition-all duration-200 active:bg-green-400"
            onClick={handlePrint}>
            Print Invoice
        </button>

        <div ref={printRef} className="a4">

            {/* Header */}
            <header className="flex items-start justify-end mb-6">
                <Image src={Logo} alt="" className="mr-auto"/>

                <div className="flex flex-col gap-1">
                    <span className="text-[#363B46] text-[19.125pt] font-bold">Yusuf</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">552 448 3327</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">yyilidz518@gmail.com</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">Siteler mah. 1346 sokak</span>
                </div>
            </header>


            <table className="w-full break-inside-auto">

                <thead className="h-[50px] w-full bg-[#FFC90B]">
                <tr>
                    <th>
                         <span
                             className="text-[10pt] text-[#363B46] font-bold">{langs.invoice[selectedLang]}#</span>
                    </th>
                    <th>
                        <span className="text-[10pt] text-[#000] font-bold">45489</span>
                    </th>
                    <th>
                        <div className="flex items-center justify-around">
                            <div className="flex items-center justify-between gap-2">
                                <span
                                    className="text-[10pt] text-[#363B46] font-bold">{langs.teklifNo[selectedLang]}:</span>
                                <span className="text-[10pt] text-[#000] font-bold">{details.order_no}</span>
                            </div>

                            <div className="flex items-center justify-between gap-2">
                                <span
                                    className="text-[10pt] text-[#363B46] font-bold">{langs.date[selectedLang]}:</span>
                                <span
                                    className="text-[10pt] text-[#000] font-bold">12 / 04 / 2023</span>
                            </div>
                        </div>
                    </th>
                    <th/>
                    <th/>
                    <th>
                    </th>
                </tr>
                </thead>

                <thead className="bg-[#363B46] [&_tr_th]:text-center [&_tr_th]: [&_tr_th]:text-white">
                <tr>
                    <th className="px-1 w-fit !font-serif">{langs.order[selectedLang]}</th>
                    <th className="px-1 w-min !font-serif">{langs.image[selectedLang]}</th>
                    <th className="max-h-[105px] !font-serif">{langs.productFeatures[selectedLang]}</th>
                    <th className="!w-fit !font-serif">{langs.price[selectedLang]}</th>
                    <th className="!w-fit !font-serif">{langs.quantity[selectedLang]}</th>
                    <th className="!w-fit !font-serif">{langs.total[selectedLang]}</th>
                </tr>
                </thead>
                <tbody className="[&_tr_td]:p-[6px] [&_tr_td]:text-center [&_tr_th]:text-[#363B46]">
                {details.products.map((product, idx) => (
                    <tr key={idx} className="even:bg-[#F2F2F2] bg-white break-inside-avoid">
                        <td className="border-l-2 border-r-2 border-b-2 border-dashed border-[#363B46] text-[13.5pt] text-[#363B46] font-bold">{idx + 1}</td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">
                            {product?.image ?
                                <Image src={product?.image} height={75} alt="" className="object-contain m-auto"/> :
                                <div>Not Found</div>}
                        </td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46] overflow-hidden">
                            <div className="!max-h-[99px] overflow-hidden gap-2 flex flex-wrap">
                                <span className="px-2.5 py-1 bg-green-600 text-[9pt] text-white rounded-full w-fit">
                                {product.name}
                            </span>


                                <span
                                    className="px-2.5 py-1 bg-yellow-500 text-[9pt] text-white rounded-full w-fit">
                                {product.info}
                            </span>

                                <span
                                    className="px-2.5 py-1 bg-blue-500  text-[10pt] text-white rounded-full w-fit">
                                {product.id}
                            </span>
                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>

                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>
                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>
                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>
                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>
                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>
                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>
                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>
                                <div
                                    className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                    <span>xxx</span>
                                </div>


                                {
                                    product.extras.map(feature => <div
                                        className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                        <span>{feature.value}</span>
                                    </div>)
                                }

                                {
                                    product.note && product.note !== "" && <div
                                        className="px-2 py-1 bg-slate-600 flex gap-1 [&_span]:text-white rounded-md [&_span]:text-[10pt] items-center w-full">
                                        <span>{product.note}</span>
                                    </div>
                                }
                            </div>
                        </td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">{formatCurrency(product.price)} грн</td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">{product.quantity} грн</td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">{formatCurrency((product.quantity * product.price))} грн</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Footer */}
            <footer className="flex justify-between">
                <div className="mt-[24px] flex flex-col h-full">
                    <span className="text-[#363B46] text-[15pt] font-bold">{langs.firmaBilgileri[selectedLang]}</span>
                    <span className="text-[10pt] text-[#647680] font-bold">Фізична особа-підприємець Дурал Онур код за ЄДРПОУ 2896224270 </span>
                    <span className="text-[10pt] text-[#647680] font-bold">UA043052990000026008040126820, Банк АТ КБ "ПРИВАТБАНК", МФО 305299 </span>
                    <span className="text-[10pt] text-[#647680] font-bold">Україна, 76006, Івано-Франківська обл., м.Івано-Франківськ, вул.Вовчинецька, будинок № 200, кв.7</span>
                </div>

                <div className="flex flex-col items-end gap-2 mt-[24px]">
                    <div className="flex items-center gap-6 px-1.5 w-[300px]">
                        <span className="text-[#363B46] text-[13pt] font-bold">{langs.total[selectedLang]} :</span>
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{total.total} грн</p>
                    </div>

                    <div className="flex items-center gap-6 px-1.5 w-[300px]">
                        <span className="text-[#363B46] text-[13pt] font-bold">{langs.vergi[selectedLang]} :</span>
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{total.tax} грн</p>
                    </div>

                    <div className="flex items-center gap-6 w-[300px] bg-[#FFC90B] p-1.5 rounded-sm">
                        <span
                            className="text-[#363B46] text-[13pt] font-bold">{langs.genelToplam[selectedLang]} :</span>
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{total.grandTotal} грн</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
}

export default Invoice