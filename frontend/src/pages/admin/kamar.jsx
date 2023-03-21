import React from "react";
import NavbarAdmin from "./navbar";
import $ from "jquery";
import axios from "axios";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default class Kamar extends React.Component {
    constructor() {
        super()
        this.state = {
            kamar: [],
            action: "",
            token: "",
            id_kamar: 0,
            nomor_kamar: "",
            id_tipe_kamar: 0,
            fillPassword: true
        }
        let user = JSON.parse(localStorage.getItem('user'))
        if (localStorage.getItem("token") && user.role === "admin") {
            this.state.token = localStorage.getItem("token")
        } else {
            window.alert("Maaf, anda bukan admin")
            window.location = "/"
        }
    }
    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        }
        return header
    }
    getKamar = () => {
        $("#dropdown").hide()
        let url = "http://localhost:8000/hotel/kamar/"
        axios.get(url, this.headerConfig())
            .then(response => {
                this.setState({ kamar: response.data.data })
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status) {
                        window.alert(error.response.data.message)
                        window.location = '/'
                    }
                } else {
                    console.log(error);
                }
            })
    }
    Add = () => {
        $("#modal_kamar").show()
        this.setState({
            id_kamar: 0,
            nomor_kamar: "",
            id_tipe_kamar: 0,
            fillPassword: true,
            action: "insert"
        })
    }
    Edit = selectedItem => {
        $("#modal_kamar").show()
        this.setState({
            id_kamar: selectedItem.id_kamar,
            nomor_kamar: selectedItem.nomor_kamar,
            id_tipe_kamar: selectedItem.id_tipe_kamar,
            action: "update"
        })
    }
    saveKamar = (event) => {
        event.preventDefault()
        $("#modal_kamar").show()
        let sendData = {
            id_kamar: this.state.id_kamar,
            nomor_kamar: this.state.nomor_kamar,
            id_tipe_kamar: this.state.id_tipe_kamar
        }
        let url = "http://localhost:8000/hotel/kamar/"
        if (this.state.action === "insert") {
            axios.post(url, sendData, this.headerConfig())
                .then(response => {
                    window.alert(response.data.message)
                    this.getKamar()
                })
        } else if (this.state.action === "update") {
            axios.put(url, sendData, this.headerConfig())
                .then(response => {
                    window.alert(response.data.message)
                    this.getKamar()
                })
                .catch(error => console.log(error))
        }
        $("#modal_kamar").hide()
    }
    dropKamar = selectedItem => {
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            let url = "http://localhost:8000/hotel/kamar/" + selectedItem.id_kamar
            axios.delete(url, this.headerConfig())
                .then(response => {
                    window.alert(response.data.message)
                    this.getKamar()
                })
                .catch(error => console.log(error))
        }
    }
    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    componentDidMount() {
        this.getKamar()
    }
    close = () => {
        $("#modal_kamar").hide()
    }

    render() {
        return (
            <div>
                <NavbarAdmin />
                <div className="flex justify-between mb-2 bg-gray-700 text-white p-1.5 rounded-xl items-center m-6">
                    <h1 className="ml-4 font-bold text-3xl  tracking-wider">Daftar Kamar</h1>
                    <button className="hover:bg-blue-400 bg-blue-600 text-white font-bold uppercase text-xs px-4 py-3 rounded-md shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 tracking-wider" type="button" onClick={() => this.Add()}>
                        Tambah Kamar
                    </button>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-6">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nomor Kamar
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ID Tipe Kamar
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Hapus</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.kamar.map((item) => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4">
                                        {item.nomor_kamar}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.id_tipe_kamar}
                                    </td>
                                    <td class="px-0 py-4">
                                        <a data-tooltip-target="tooltip-editUser" data-tooltip-placement="right" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-700" onClick={() => this.Edit(item)}>
                                            <FiEdit3 size={15} />
                                            <span class="sr-only">Edit</span>
                                        </a>
                                        <div id="tooltip-editUser" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-blue-600">
                                            Edit
                                            <div class="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </td>
                                    <td class="px-0 py-4">
                                        <a data-tooltip-target="tooltip-hapusUser" data-tooltip-placement="right" type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => this.dropKamar(item)}>
                                            <MdDelete size={15} />
                                            <span class="sr-only">Hapus</span>
                                        </a>
                                        <div id="tooltip-hapusUser" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-red-600">
                                            Hapus
                                            <div class="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Modal */}
                <div id="modal_kamar" tabindex="-1" aria-hidden="true" class="overflow-x-auto fixed top-0 left-0 right-0 z-50 hidden w-full p-4 md:inset-0 h-modal md:h-full bg-tranparent bg-black bg-opacity-50">
                    <div class="flex lg:h-auto w-auto justify-center">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-600 w-1/3">
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-500 dark:hover:text-white" onClick={() => this.close()}>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Tutup modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white tracking-widest">Edit Daftar User</h3>
                                <form class="space-y-6" onSubmit={(event) => this.saveKamar(event)}>
                                    <div className="tracking-wider">
                                        <label for="nomor_kamar" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Nomor Kamar</label>
                                        <input type="text" name="nomor_kamar" id="nomor_kamar" value={this.state.nomor_kamar} onChange={this.bind} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:focus:ring-lime-500 dark:focus:border-lime-700 block w-full p-2.5 dark:border-none dark:bg-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Masukkan nomor kamar" required />
                                    </div>
                                    <div className="tracking-wider">
                                        <label for="id_tipe_kamar" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Tipe Kamar</label>
                                        <input type="number" name="id_tipe_kamar" id="id_tipe_kamar" value={this.state.id_tipe_kamar} onChange={this.bind} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-700 block w-full p-2.5 dark:bg-gray-500 dark:border-none dark:placeholder-gray-400 dark:text-white" placeholder="Masukkan Tipe Kamar" required />
                                    </div>
                                    <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-400 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-lime-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}