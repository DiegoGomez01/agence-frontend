import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Tab } from 'semantic-ui-react'
import Pie from '../Charts/Pie';
import BarChart from '../Charts/BarChart';
import Table from '../Tables/Tables';
import TbodyConsultor from '../Tables/TbodyConsultor';

const columns = ['Periodo', 'Receita Líquida', 'Custo Fixo', 'Comissão', 'Lucro']

const panes = [
    {
        menuItem: 'Table',
        render: (props) => <Tab.Pane attached={false}>
            {props.report.map((report, index) => {
                const item = (
                    <div key={index}>
                        <p style={{textAlign: 'left'}}>{report.name}</p>
                        <Table data={report.report} headers={columns} tbody={TbodyConsultor}/>
                    </div>
                );
                return item;
            })}

        </Tab.Pane>,
    },
    {
        menuItem: 'Charts',
        render: (props) => <Tab.Pane attached={false}>
            <Row>
                <Col sm={5}>
                    <Pie report={props.report} />
                </Col>
                <Col sm={7}>
                    <BarChart report={props.report} />
                </Col>
            </Row>
        </Tab.Pane>,
    },
]

const TabExamplePointing = (props) => <Tab menu={{ pointing: true }} panes={panes} report={props.report} />

export default TabExamplePointing