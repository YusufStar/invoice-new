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

const Invoice = () => {
    const printRef = useRef(null)

    function filterDataByOrderId() {
        const res = {
            order_no: data.orderCode,
            products: []
        }

        data.Orders.forEach(value => {
            const pr_id = value.id

            let x_d = {}

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
                        name: x_m.productName
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
        pageStyle: `margin: 30mm 45mm 30mm 45mm`,
    })

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("uk-UA", {
            style: "currency",
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

    return <div className="flex flex-col w-fit h-fit gap-6">
        <button onClick={handlePrint}>
            Print Invoice
        </button>

        <div ref={printRef} className="a4">
            {/* Header */}
            <header className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                    <span className="text-[#363B46] text-[19.125pt] font-bold">Yusuf</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">552 448 3327</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">yyilidz518@gmail.com</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">Siteler mah. 1346 sokak</span>
                </div>

                <div className="flex flex-col items-end gap-2">
                            <span
                                className="text-[13.5pt] text-[#363B46] font-bold">Teklif no: {details.order_no}</span>
                    <div className="w-full flex flex-col h-fit gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-[13.5pt] text-[#363B46] font-bold">Invoice#</span>
                            <span className="text-[13.5pt] text-[#647680] font-bold">45489</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-[13.5pt] text-[#363B46] font-bold">Date</span>
                            <span
                                className="text-[13.5pt] text-[#647680] font-bold">12 / 04 / 2023</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="h-[50px] w-full bg-[#FFC90B] my-5 flex items-center px-[80px]">
                <Image src={Logo} alt="" className="h-full w-fit px-6 bg-white ml-auto"/>
            </div>

            <table className="w-full">
                <thead className="bg-[#363B46] [&_tr_th]:text-center [&_tr_th]: [&_tr_th]:text-white">
                <tr>
                    <th className="w-[50px]">SIRA</th>
                    <th className="w-[125px]">RESİM</th>
                    <th className="max-h-[105px]">ÜRÜN ÖZELLİKLERİ</th>
                    <th className="w-[100px]">FİYAT</th>
                    <th className="w-[50px]">ADET</th>
                    <th className="w-[100px]">TOPLAM</th>
                </tr>
                </thead>
                <tbody className="[&_tr_td]:p-[6px] [&_tr_td]:text-center [&_tr_th]:text-[#363B46]">
                {details.products.map((product, idx) => (
                    <tr key={idx} className="even:bg-[#F2F2F2] bg-white">
                        <td className="border-l-2 border-r-2 border-b-2 border-dashed border-[#363B46] text-[13.5pt] text-[#363B46] font-bold">{idx + 1}</td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">
                            <Image src={product?.image} height={75} alt="" className="object-contain m-auto"/>
                        </td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 bg-green-600 text-[9pt] text-white rounded-full w-fit">
                                {product.name}
                            </span>


                                <span className="px-2.5 py-1 bg-yellow-500 text-[9pt] text-white rounded-full w-fit">
                                {product.info}
                            </span>

                                <span
                                    className="px-2.5 py-1 bg-blue-500  text-[10pt] text-white rounded-full w-fit">
                                {product.id}
                            </span>

                                {
                                    product.extras.map(feature => <div
                                        className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                        <span>{feature.name}</span>
                                        <span>:</span>
                                        <span>{feature.value}</span>
                                    </div>)
                                }
                                <div
                                    className="px-2 py-1 bg-slate-600 flex gap-1 [&_span]:text-white rounded-md [&_span]:text-[10pt] items-center w-full">
                                    <span>açıklama yazısı</span>
                                </div>
                            </div>
                        </td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">{formatCurrency(product.price)}</td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">{product.quantity}</td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">{formatCurrency((product.quantity * product.price))}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Footer */}
            <footer className="flex justify-between">
                <div className="mt-[24px] flex flex-col">
                    <span className="text-[#363B46] text-[15pt] font-bold">Firma Bilgileri</span>
                    <span className="text-[10pt] text-[#647680] font-bold">Фізична особа-підприємець Дурал Онур код за ЄДРПОУ 2896224270 </span>
                    <span className="text-[10pt] text-[#647680] font-bold">UA043052990000026008040126820, Банк АТ КБ "ПРИВАТБАНК", МФО 305299 </span>
                    <span className="text-[10pt] text-[#647680] font-bold">Україна, 76006, Івано-Франківська обл., м.Івано-Франківськ, вул.Вовчинецька, будинок № 200, кв.7</span>
                </div>

                <div className="flex flex-col items-end gap-2 mt-[24px]">
                    <div className="flex items-center gap-6 w-[300px]">
                        <span className="text-[#363B46] text-[15pt] font-bold">Toplam :</span>
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{total.total}</p>
                    </div>

                    <div className="flex items-center gap-6 w-[300px]">
                        <span className="text-[#363B46] text-[15pt] font-bold">Vergi :</span>
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{total.tax}</p>
                    </div>

                    <div className="flex items-center gap-6 w-[300px] bg-[#FFC90B] p-1.5 rounded-sm">
                        <span className="text-[#363B46] text-[15pt] font-bold">Genel Toplam :</span>
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{total.grandTotal}</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
}

export default Invoice