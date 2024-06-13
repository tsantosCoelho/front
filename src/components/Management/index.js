import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link, useNavigate } from 'react-router-dom';

const localizer = momentLocalizer(moment);

const BarberShopSystem = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Cliente 1",
      phone: "123456789",
      cpf: "123.456.789-00",
      serviceType: "Corte normal",
      appointments: [
        {
          id: 1,
          title: "Corte",
          start: moment().toDate(),
          end: moment().add(1, "hour").toDate(),
        },
      ],
    },
    {
      id: 2,
      name: "Cliente 2",
      phone: "987654321",
      cpf: "987.654.321-00",
      serviceType: "Barba completa",
      appointments: [],
    },
    {
      id: 3,
      name: "Cliente 3",
      phone: "111222333",
      cpf: "111.222.333-00",
      serviceType: "Corte e barba",
      appointments: [],
    },
  ]);

  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [newServiceDescription, setNewServiceDescription] = useState("");
  const [newClientName, setNewClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
    setFilteredServices(
      services.filter(
        (service) => service.clientId.toString() === event.target.value
      )
    );
  };

  const handleAddClient = () => {
    if (
      newClientName.trim() === "" ||
      phone.trim() === "" ||
      cpf.trim() === "" ||
      serviceType.trim() === ""
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newClient = {
      id: clients.length + 1,
      name: newClientName,
      phone: phone,
      cpf: cpf,
      serviceType: serviceType,
      appointments: [],
    };
    setClients([...clients, newClient]);
    setNewClientName("");
    setPhone("");
    setCpf("");
    setServiceType("");
  };

  const handleSearch = () => {
    setFilteredServices(
      services.filter((service) =>
        clients
          .find((client) => client.id === service.clientId)
          ?.name.toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="welcome">
        <h1> Bem vindo, Thiago agende um corte aqui! </h1>{" "}
      </div>
      <div className="container-central">
        <div className="select-container">
          <label> Selecione um cliente: </label>{" "}
          <select value={selectedClient} onChange={handleClientChange}>
            <option value=""> Todos </option>{" "}
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {" "}
                {client.name}{" "}
              </option>
            ))}{" "}
          </select>{" "}
        </div>

        
        <div className="input-container">
          <label> Nome do novo cliente: </label>{" "}
          <input
            type="text"
            value={newClientName}
            onChange={(e) => setNewClientName(e.target.value)}
          />{" "}
          <label> Telefone: </label>{" "}
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />{" "}
          <label> CPF: </label>{" "}
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />{" "}
          <label> Tipo de serviço: </label>{" "}
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value=""> Selecione </option>{" "}
            <option value="Corte normal"> Corte normal </option>{" "}
            <option value="Barba completa"> Barba completa </option>{" "}
            <option value="Corte e barba"> Corte e barba </option>{" "}
          </select>{" "}
          <button onClick={handleAddClient}> Adicionar Cliente </button>{" "}
        </div>


        <div className="input-container">
          <label> Buscar por cliente: </label>{" "}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />{" "}
          <button onClick={handleSearch}> Buscar </button>{" "}
        </div>{" "}
      </div>

      {/* //////// CALENDARIO //////////////// */}

      <div className="calendar-container">
        <label> Escolha a data do agendamento: </label>{" "}
        <Calendar
          localizer={localizer}
          events={clients.flatMap((client) => client.appointments)}
          startAccessor="start"
          endAccessor="end"
          defaultDate={selectedDate}
          onSelectEvent={(event) => setSelectedDate(event.start)}
          onSelectSlot={(slotInfo) => setSelectedDate(slotInfo.start)}
        />{" "}
        <div className="back">
        <Link to="/"> Voltar para a página inicial </Link>{" "}
        </div>
        
      </div>{" "}
    </div>
  );
};

export default BarberShopSystem;
