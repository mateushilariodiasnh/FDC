import { ListImageOne, ListImageTwo, ListImageThree, ListImageFour, ListImageFive, ListImageSix } from "../../icons";

export interface IDataList {
    id: number;
    image: React.FC<React.SVGProps<SVGSVGElement>|HTMLImageElement>;
    content: JSX.Element;
}

export const dataList: IDataList[] = [{
    id: 0,
    image: ListImageOne,
    content: <p>O raio-x é <strong>gratuito</strong> e demanda cerca de <strong>20 minutos</strong> para completar as respostas.</p>,
},{
    id: 1,
    image: ListImageTwo,
    content: <p>Responda com escala de N/A a 10, em que <strong>N/A significa “não se aplica” e 10 “concordo plenamente”.</strong></p>,
},{
    id: 2,
    image: ListImageThree,
    content: <p>Você pode <strong>parar e retomar a qualquer momento,</strong> as respostas ficam salvas.</p>,
},{
    id: 3,
    image: ListImageFour,
    content: <p>Você também <strong>pode voltar e rever as respostas,</strong> se quiser.</p>,
},{
    id: 4,
    image: ListImageFive,
    content: <p>Você também poderá <strong>imprimir suas respostas e o resultado.</strong> Ambos estarão disponíveis em PDF. </p>,
},{
    id: 5,
    image: ListImageSix,
    content: <p>Preencha seus dados e descubra como <strong>transformar gaps em oportunidades.</strong></p>,
}]