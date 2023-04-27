import './App.css';
import Homepage from './Pages/Homepage';
import Pricing from './Pages/Pricing';
import OntherPaper from './Pages/OntherPaper';
import Ncr from './Pages/Ncr';
import Flyer from './Pages/Flyer';
import Sticker from './Pages/Sticker';
import Card from './Pages/Card';
import Env from './Pages/Env';
import Notebook from './Pages/Notebook';
import Custom from './Pages/Custom';
import Folder from './Pages/Folder';

import Users from './Pages/Users';
import Role from './Pages/Roles';
import PaperWeight from './Pages/PaperWeight';
import PaperType from './Pages/PaperType';
import PaperSize from './Pages/PaperSize';
import PaperCal from './Pages/PaperCal';
import PrintType from './Pages/PrintType';
import CoverType from './Pages/CoverType';
import ExtraType from './Pages/ExtraType';
import Orders from './Pages/Orders';
import FinRent from './Pages/FinRent';
import FinMaintenance from './Pages/FinMaintenance';
import FinMarketing from './Pages/FinMarketing';
import FinOther from './Pages/FinOther';
import FinSettings from './Pages/FinSettings';

import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";
import Login from './Pages/Login';
import Logout from './Components/Logout';
import CreateModal from "./Components/CreateModal"
// import UpdateProfile from "./Components/UpdateProfile"
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './img/logo (1).svg'

import FinStatistics from './Pages/FinStatistics';
import FinTransation from './Pages/FinTransation';
import Merchant from './Pages/Merchant';
import Employes from './Pages/Employes';
import Clients from './Pages/Clients';
import Admin from './Pages/Admin';

function App() {
  const [checkuser, checkuserSet] = useState(true);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const [homepage, setHomepage] = React.useState(false);
  const [pricepage, setPricepage] = React.useState(false);
  const [orderpage, setOrderpage] = React.useState(false);
  const [ontherpaperpage, setOntherpaperpage] = React.useState(false);
  const [flyerpage, setFlyerpage] = React.useState(false);
  const [cardpage, setCardpage] = React.useState(false);
  const [stickerpage, setStickerpage] = React.useState(false);
  const [envpage, setEnvpage] = React.useState(false);
  const [notebookpage, setNotebookpage] = React.useState(false);
  const [custompage, setCustompage] = React.useState(false);
  const [ncrpage, setNcrpage] = React.useState(false);
  const [folderpage, setFolderpage] = React.useState(false);

  const [rentpage, setRentpage] = React.useState(false);
  const [maintenancepage, setMaintenancepage] = React.useState(false);
  const [marketingpage, setMarketingpage] = React.useState(false);
  const [otherpage, setOtherpage] = React.useState(false);

  const [fintransationpage, setFintransationpage] = React.useState(false);
  const [finstatisticspage, setFinstatisticspage] = React.useState(false);
  const [finsettingspage, setFinsettingspage] = React.useState(false);

  const [userspage, setUserspage] = React.useState(false);
  const [merchantspage, setMerchantspage] = React.useState(false);
  const [employespage, setEmployespage] = React.useState(false);
  const [clientpage, setClientpage] = React.useState(false);
  const [adminpage, setAdminpage] = React.useState(false);

  const [rolespage, setRolespage] = React.useState(false);
  const [paperTypepage, setPaperTypepage] = React.useState(false);
  const [paperWeightpage, setPaperWeightpage] = React.useState(false);
  const [paperSizetpage, setPaperSizepage] = React.useState(false);
  const [paperCaltpage, setPaperCalpage] = React.useState(false);


  const [printTypepage, setPrintTypepage] = React.useState(false);
  const [coverTypepage, setCoverTypepage] = React.useState(false);
  const [extraTypepage, setExtraTypepage] = React.useState(false);

  
  const [usertitle, setUsertitle] = React.useState('اعدادات المستخدمين');
  const [papertitle, setPapertitle] = React.useState('اعدادات الورق');
  const [printtitle, setPrinttitle] = React.useState('اعدادات الطباعة');
  const [covertitle, setCovertitle] = React.useState('اعدادات التغليف');
  const [financetitle, setFinancetitle] = React.useState(' الماليات');


  if (checkuser) {
    return (<div>
      <Login checkuserSet={checkuserSet} />
    </div>);
  }

  return (
    <div className="layout"  lang="ar">

      <div className="card ">

        <div class="right col-auto">

          <div class="fixed-menu">

            <Nav variant="tabs" defaultActiveKey="/home" className="flex-column mb-3" style={{ display: 'inline-block' }}>

              <img className='m-3' src={logo} style={{ width: 80 }}></img>

              <Nav.Item>
                <Nav.Link href="/" active={homepage} >Homepage</Nav.Link>

              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/pricing" active={pricepage} >التسعير</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/orders" active={orderpage} >الاوردرات</Nav.Link>
              </Nav.Item>

              <NavDropdown title={financetitle} menuVariant='dark' active={fintransationpage || finstatisticspage || finsettingspage}>
                <NavDropdown.Item href="/finance/transation" active={fintransationpage}>المعاملات</NavDropdown.Item>
                <NavDropdown.Item href="/finance/statistics" active={finstatisticspage}>الاحصائيات</NavDropdown.Item>
                <NavDropdown.Item href="/finance/settings" active={finsettingspage}>الاعدادات</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={usertitle} menuVariant='dark' active={userspage || rolespage || merchantspage || employespage || clientpage || adminpage}>
                <NavDropdown.Item href="/users" active={userspage}>كل المستخدمين</NavDropdown.Item>
                <NavDropdown.Item href="/adminuser" active={adminpage}>المسؤلين</NavDropdown.Item>
                <NavDropdown.Item href="/employesuser" active={employespage}>الموظفين</NavDropdown.Item>
                <NavDropdown.Item href="/clientuser" active={clientpage}>العملاء</NavDropdown.Item>
                <NavDropdown.Item href="/merchantuser" active={merchantspage}>التجار</NavDropdown.Item>
                <NavDropdown.Item href="/role" active={rolespage}>الصلاحيات</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={papertitle} menuVariant='dark' active={paperTypepage || paperWeightpage || paperSizetpage || paperCaltpage}>
                <NavDropdown.Item href="/paperType" active={paperTypepage}>انواع الورق</NavDropdown.Item>
                <NavDropdown.Item href="/paperWeight" active={paperWeightpage}>أوزان و سعر الورق</NavDropdown.Item>
                <NavDropdown.Item href="/paperSize" active={paperSizetpage}>مقاسات الورق</NavDropdown.Item>
                <NavDropdown.Item href="/paperCal" active={paperCaltpage}>حسبة الورق</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={printtitle} menuVariant='dark' active={printTypepage}>
                <NavDropdown.Item href="/printType" active={printTypepage}>انواع الطباعة</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={covertitle} menuVariant='dark' active={coverTypepage || extraTypepage}>
              <NavDropdown.Item href="/coverType" active={coverTypepage}>انواع التغليف</NavDropdown.Item>
              <NavDropdown.Item href="/extraType" active={extraTypepage}>انواع الزيادات</NavDropdown.Item>
              </NavDropdown>

            </Nav>


            <button className="btn btn-danger mb-3 " onClick={() => {
              // <UpdateProfile setIsOpen={setIsOpen} id={localStorage.getItem("react_user_id")} databasename="users"/>

              setModalContent(

                <div className="card">
                  <div className="card-header">
                    الملف الشخصى
                  </div>
                  <div className="card-body">
                    <div className="div-two  ">
                      <div class="p-3">
                        <label for="floatingInput" className='form-label'>Name</label>
                        <input type="text" class="form-control" id="floatingInput" defaultValue={localStorage.getItem("react_user_name")} readOnly />
                      </div>

                      <div class="p-3">
                        <label for="floatingInput" className='form-label'>Phone</label>
                        <input type="text" class="form-control" id="floatingInput" defaultValue={localStorage.getItem("react_user_phone")} readOnly />
                      </div>

                      <div class="p-3">
                        <label for="floatingInput" className='form-label'>Email</label>
                        <input type="text" class="form-control" id="floatingInput2" defaultValue={localStorage.getItem("react_user_email")} readOnly />
                      </div>

                      <div class="p-3">
                        <label for="floatingInput" className='form-label'>Username</label>
                        <input type="text" class="form-control" id="floatingInput3" defaultValue={localStorage.getItem("react_user_username")} readOnly />
                      </div>

                      <div class="p-3">
                        <Logout checkuserSet={checkuserSet} setIsOpen={setIsOpen}></ Logout>
                      </div>
                    </div>

                  </div>
                </div>

              );
              setIsOpen(true);
            }
            }> {localStorage.getItem("react_user_name")}</button>

          </div>
        </div>
      </div>



      <div className="left col">
        <div className="tab-content container"  >

          <Routes>
            <Route className="" path='/' element={<Homepage pagename='Homepage' setpageactivation={setHomepage} />} />
            <Route className="nav-item" path='/pricing' element={<Pricing pagename='التسعير' setpageactivation={setPricepage} />} />

            <Route className="nav-item" path='/pricing/paper' element={<OntherPaper pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setOntherpaperpage} subpageactivation={ontherpaperpage} />} />
            <Route className="nav-item" path='/pricing/ncr' element={<Ncr pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setNcrpage} subpageactivation={ncrpage} />} />
            <Route className="nav-item" path='/pricing/flyer' element={<Flyer pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setFlyerpage} subpageactivation={flyerpage} />} />
            <Route className="nav-item" path='/pricing/sticker' element={<Sticker pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setStickerpage} subpageactivation={stickerpage} />} />
            <Route className="nav-item" path='/pricing/card' element={<Card pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setCardpage} subpageactivation={cardpage} />} />
            <Route className="nav-item" path='/pricing/env' element={<Env pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setEnvpage} subpageactivation={envpage} />} />
            <Route className="nav-item" path='/pricing/notebook' element={<Notebook pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setNotebookpage} subpageactivation={notebookpage} />} />
            <Route className="nav-item" path='/pricing/custom' element={<Custom pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setCustompage} subpageactivation={custompage} />} />
            <Route className="nav-item" path='/pricing/folder' element={<Folder pagename='التسعير' setpageactivation={setPricepage} setsubpageactivation={setFolderpage} subpageactivation={folderpage} />} />

            <Route className="nav-item" path='/orders' element={<Orders pagename='الاوردرات' setpageactivation={setOrderpage} />} />

            <Route className="nav-item" path='/finance/transation' element={<FinTransation pagename='المعاملات' setpageactivation={setFintransationpage} titleset={setFinancetitle} />} />
            <Route className="nav-item" path='/finance/statistics' element={<FinStatistics pagename='الاحصائيات' setpageactivation={setFinstatisticspage} titleset={setFinancetitle} />} />
            <Route className="nav-item" path='/finance/settings' element={<FinSettings pagename='الاعدادات' setpageactivation={setFinsettingspage} titleset={setFinancetitle} />} />

            <Route className="nav-item" path='/finance/settings/rent' element={<FinRent pagename='الاعدادات' setpageactivation={setFinsettingspage} titleset={setFinancetitle} setsubpageactivation={setRentpage} subpageactivation={rentpage} />} />
            <Route className="nav-item" path='/finance/settings/maintenance' element={<FinMaintenance pagename='الاعدادات' setpageactivation={setFinsettingspage} titleset={setFinancetitle} setsubpageactivation={setMaintenancepage} subpageactivation={maintenancepage} />} />
            <Route className="nav-item" path='/finance/settings/marketing' element={<FinMarketing pagename='الاعدادات' setpageactivation={setFinsettingspage} titleset={setFinancetitle} setsubpageactivation={setMarketingpage} subpageactivation={marketingpage} />} />
            <Route className="nav-item" path='/finance/settings/other' element={<FinOther pagename='الاعدادات' setpageactivation={setFinsettingspage} titleset={setFinancetitle} setsubpageactivation={setOtherpage} subpageactivation={otherpage} />} />


            <Route className="nav-item" path='/users' element={<Users pagename='كل المستخدمين' setpageactivation={setUserspage} titleset={setUsertitle} />} />
            <Route className="nav-item" path='/merchantuser' element={<Merchant pagename='التجار' setpageactivation={setMerchantspage} titleset={setUsertitle} />} />
            <Route className="nav-item" path='/employesuser' element={<Employes pagename='الموظفين' setpageactivation={setEmployespage} titleset={setUsertitle} />} />
            <Route className="nav-item" path='/clientuser' element={<Clients pagename='العملاء' setpageactivation={setClientpage} titleset={setUsertitle} />} />
            <Route className="nav-item" path='/adminuser' element={<Admin pagename='المسؤلين' setpageactivation={setAdminpage} titleset={setUsertitle} />} />
            <Route className="nav-item" path='/role' element={<Role pagename='الصلاحيات' setpageactivation={setRolespage} titleset={setUsertitle} />} />
            <Route className="nav-item" path='/paperType' element={<PaperType pagename='انواع الورق' setpageactivation={setPaperTypepage} titleset={setPapertitle} />} />
            <Route className="nav-item" path='/paperWeight' element={<PaperWeight pagename='أوزان و سعر الورق' setpageactivation={setPaperWeightpage} titleset={setPapertitle} />} />
            <Route className="nav-item" path='/paperSize' element={<PaperSize pagename='مقاسات الورق' setpageactivation={setPaperSizepage} titleset={setPapertitle} />} />
            <Route className="nav-item" path='/paperCal' element={<PaperCal pagename='حسبة الورق' setpageactivation={setPaperCalpage} titleset={setPapertitle} />} />
            <Route className="nav-item" path='/printType' element={<PrintType pagename='انواع الطباعة' setpageactivation={setPrintTypepage} titleset={setPrinttitle} />} />
            <Route className="nav-item" path='/coverType' element={<CoverType pagename='انواع التغليف' setpageactivation={setCoverTypepage} titleset={setCovertitle} />} />
            <Route className="nav-item" path='/extraType' element={<ExtraType pagename='انواع الزيادات' setpageactivation={setExtraTypepage} titleset={setCovertitle} />} />
            
            <Route path="*" element={<PageNotFound />} />


          </Routes>
          <CreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalContent={modalContent} />
        </div>
      </div>
    </div>
  );

}

function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}
export default App;
