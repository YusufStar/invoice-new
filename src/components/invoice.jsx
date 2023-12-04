'use client'

import {useRef} from "react";
import {useReactToPrint} from "react-to-print";
import Logo from "@/assets/Logo.png"
import ExampleProductImage from "@/assets/example.png"
import Gold from "@/assets/gold.png"
import Image from "next/image";

const details = {
    user: {
        name: "Yusuf Yıldız",
        phone: "+90 552 448 3327",
        email: "yyilidz518@gmail.com",
        adress: "Siteler mah. 1346 sokak akdeniz konutları"
    },
    invoice: {
        no: "K435TO149",
        id: "52146",
        date: new Date().toLocaleDateString("TR-tr"),
        products: [
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                   {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
            {
                info: "Yatak",
                productNo: "H54YXO785K1FU",
                image: ExampleProductImage,
                price: 102.776,
                quantity: 2,
                features: [
                    {
                        name: "Ölçü",
                        value: "381/218,1/161,5 200/20",
                    },

                    {
                        name: "Metal",
                        image: Gold,
                        value: "Altın Kaplama Ayak",
                    },
                    {
                        name: "Renk",
                        value: "#077541"
                    },
                    {
                        value: "Aslan kumaş",
                    },
                    {
                        value: "Ekstra 4 ayak"
                    }
                ]
            },
        ]
    }
}

const Invoice = () => {
    const printRef = useRef(null)

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
            total += product.quantity * product.price;
        });

        tax = total * (taxRate / 100);

        const grandTotal = total + tax;

        return {
            total: formatCurrency(total),
            tax: formatCurrency(tax),
            grandTotal: formatCurrency(grandTotal),
        };
    };

    const totals = calculateTotals(16, details.invoice.products)

    return <div className="flex flex-col w-fit h-fit gap-6">
        <button onClick={handlePrint}>
            Print Invoice
        </button>
        <div ref={printRef} className="a4">
            {/* Header */}
            <header className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                    <span className="text-[#363B46] text-[19.125pt] font-bold">{details.user.name}</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">{details.user.phone}</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">{details.user.email}</span>
                    <span className="text-[13.5pt] text-[#647680] font-bold">{details.user.adress}</span>
                </div>

                <div className="flex flex-col items-end gap-2">
                    <span className="text-[13.5pt] text-[#363B46] font-bold">Teklif no: {details.invoice.no}</span>
                    <div className="w-full flex flex-col h-fit gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-[13.5pt] text-[#363B46] font-bold">Invoice#</span>
                            <span className="text-[13.5pt] text-[#647680] font-bold">{details.invoice.id}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-[13.5pt] text-[#363B46] font-bold">Date</span>
                            <span className="text-[13.5pt] text-[#647680] font-bold">{details.invoice.date}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="h-[50px] w-full bg-[#FFC90B] my-4 flex items-center px-[80px]">
                <Image src={Logo} alt="" className="h-full w-fit px-6 bg-white ml-auto"/>
            </div>

            <table className="w-full">
                <thead className="bg-[#363B46] [&_tr_th]:text-center [&_tr_th]: [&_tr_th]:text-white">
                <tr>
                    <th>SIRA</th>
                    <th className="w-[175px]">RESİM</th>
                    <th>ÜRÜN BİLGİSİ</th>
                    <th>ÜRÜN ÖZELLİKLER</th>
                    <th>FİYAT</th>
                    <th>ADET</th>
                    <th>TOPLAM</th>
                </tr>
                </thead>
                <tbody className="[&_tr_td]:p-[6px] [&_tr_td]:text-center [&_tr_th]:text-[#363B46]">
                {details.invoice.products.map((product, idx) => (
                    <tr key={idx} className="even:bg-[#F2F2F2] bg-white">
                        <td className="border-l-2 border-r-2 border-b-2 border-dashed border-[#363B46] text-[13.5pt] text-[#363B46] font-bold">{idx + 1}</td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">
                            <Image src={product.image} height={75} alt="" className="object-contain m-auto"/>
                        </td>
                        <td className="border-r-2 border-b-2 border-dashed border-[#363B46]">
                            <div className="flex flex-col gap-1">
                            <span>
                                {product.info}
                            </span>

                            <span className="px-2.5 py-1 mx-auto bg-[#363B46] text-[10pt] text-white rounded-full w-fit">
                                {product.productNo}
                            </span>
                            </div>
                        </td>
                        <td className="border-r-2 border-b-2 border-dashed w-[400px] border-[#363B46]">
                            <div className="flex flex-wrap gap-2">
                                {
                                    product.features.map(feature => <div
                                        className="px-2 py-1 bg-[#363B46] flex gap-1 [&_span]:text-white rounded-full [&_span]:text-[10pt] items-center">
                                        <span>{feature.value}</span>
                                    </div>)
                                }
                                <div
                                    className="px-2 py-1 bg-slate-600 flex gap-1 [&_span]:text-white rounded-md [&_span]:text-[8pt] items-center w-full">
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
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{totals.total}</p>
                    </div>

                    <div className="flex items-center gap-6 w-[300px]">
                        <span className="text-[#363B46] text-[15pt] font-bold">Vergi :</span>
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{totals.tax}</p>
                    </div>

                    <div className="flex items-center gap-6 w-[300px] bg-[#FFC90B] p-1.5 rounded-sm">
                        <span className="text-[#363B46] text-[15pt] font-bold">Genel Toplam :</span>
                        <p className="ml-auto text-[#363B46] text-[12pt] font-bold">{totals.grandTotal}</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
}

export default Invoice