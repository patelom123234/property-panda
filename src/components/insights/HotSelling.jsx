import { InvestmentHeading } from "./InvestmentDivs";
import { Table } from "./TopSellingPlace";
import Styles from "./HotSelling.module.css"

const data = [
    { id: 1, project: 'A', sale_value: 1000, panda_review: 5,  },
    { id: 2, project: 'B', sale_value: 1200, panda_review: 8, },
    { id: 3, project: 'B', sale_value: 1200, panda_review: 8, },
    { id: 4, project: 'B', sale_value: 1200, panda_review: 8, },
    { id: 5, project: 'B', sale_value: 1200, panda_review: 8, },
    { id: 6, project: 'B', sale_value: 1200, panda_review: 8, },
  ];


export default function HotSelling() {


    const columns = [
        { key: 'project', label: 'PROJECT' },
        { key: 'sale_value', label: 'SALE VALUE' },
        { key: 'panda_review', label: 'PANDA REVIEW' },
      ];

  return (

    <div className={Styles.hotselling_container}>
    <InvestmentHeading heading="Hot Selling" subheading="Unlocking Real Estate Potential in Every Neighborhood"/>
    <div className={Styles.table_div_full}>
    <div className={Styles.table_div}>
    <Table columns={columns} data={data} />
    </div>
    </div>
    </div>
  )
}

