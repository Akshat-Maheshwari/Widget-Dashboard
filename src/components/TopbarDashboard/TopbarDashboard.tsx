import './TopbarDashboard.css';
import home from "@assets/home.svg";
import plus from "@assets/plus.svg";
import settings from "@assets/settings.svg";
import AddWidget from '@components/AddWidget/AddWidget';
import Modal from '@components/Modal/Modal';
import { useState } from 'react';

type TTopbarProps={
  error:unknown,
  loading:boolean
}

function TopbarDashboard({error,loading}:TTopbarProps) {
  const [openModal,setOpenModal]=useState(false);
  function onClose(){
    setOpenModal(false);
  }
  return (
    <div className="topbarDashboard">
      <div className="topbarDashboard__left">
        <div className="topbarDashboard__item">
          <img src={home} alt="home" />
        </div>
        <div className="topbarDashboard__item">
          <div className="topbarDashboard__item--tab">
            <span className="tab__content"> Overview </span>
          </div>
          <div className="topbarDashboard__item--tab tab__selected">
            <span className="tab__content"> Customers </span>
          </div>
          <div className="topbarDashboard__item--tab">
            <span className="tab__content"> Products </span>
          </div>
          <div className="topbarDashboard__item--tab">
            <span className="tab__content"> Settings </span>
          </div>
          <div className="topbarDashboard__item--add">
            <img src={plus} alt="plus"/>
          </div>
        </div>
      </div>
      <div className="topbarDashboard__right">
        <div onClick={()=>setOpenModal(true)} className={`topbarDashboard__item topbarDashboard__item--addWidget ${(loading || error) && "addWidget--disabled"}`}>
          <img src={plus} alt="plus" />
          <span>Add Widget</span>
        </div>
        <Modal open={openModal} onClose={onClose}>
          <AddWidget onClose={onClose} />
        </Modal>
        <div className="topbarDashboard__item">
          <img src={settings} alt="settings" />
        </div>
      </div>
    </div>
  )
}

export default TopbarDashboard;