import React from "react";
import $ from "jquery";
import axios from "axios";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import NavbarAdmin from "./navbar";

export default class TipeKamar extends React.Component {
    constructor() {
        super()
        this.state = {
            tipe_kamar: [],
            action: "",
            token: "",
            id_tipe_kamar: 0,
            nama_tipe_kamar: '',
            harga: '',
            deskripsi: '',
            foto: null,
            fillPassword: true
        }
        let user = JSON.parse(localStorage.getItem('user'))
        if (localStorage.getItem("token") && user.role === 'admin') {
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
    getTipeKamar = () => {
        let url = "http://localhost:8000/hotel/tipe_kamar/"
        axios.get(url, this.headerConfig())
            .then(response => {
                this.setState({ tipe_kamar: response.data.data })
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
        $("#modal_tipe_kamar").show()
        this.setState({
            id_tipe_kamar: 0,
            nama_tipe_kamar: '',
            harga: '',
            deskripsi: '',
            foto: null,
            action: "insert",
            fillPassword: true
        })
    }
    Edit = selectedItem => {
        $("#modal_tipe_kamar").show()
        this.setState({
            id_tipe_kamar: selectedItem.id_tipe_kamar,
            nama_tipe_kamar: selectedItem.nama_tipe_kamar,
            harga: selectedItem.harga,
            deskripsi: selectedItem.deskripsi,
            foto: null,
            action: "update"
        })
    }
    saveTipeKamar = (event) => {
        event.preventDefault()
        $("#modal_tipe_kamar").show()
        let form = new FormData()
        form.append("id_tipe_kamar", this.state.id_tipe_kamar)
        form.append("nama_tipe_kamar", this.state.nama_tipe_kamar)
        form.append("harga", this.state.harga)
        form.append("deskripsi", this.state.deskripsi)
        form.append("foto", this.state.foto)
        let url = "http://localhost:8000/hotel/tipe_kamar"
        if (this.state.action === "insert") {
            axios.post(url, form, this.headerConfig())
                .then(response => {
                    window.alert(response.data.message)
                    this.getTipeKamar()
                })
        } else if (this.state.action === "update") {
            axios.put(url, form, this.headerConfig())
                .then(response => {
                    window.alert(response.data.message)
                    this.getTipeKamar()
                })
                .catch(error => console.log(error))
        }
        $("#modal_tipe_kamar").hide()
    }
    dropTipeKamar = selectedItem => {
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            let url = "http://localhost:8000/hotel/tipe_kamar/" + selectedItem.id_tipe_kamar
            axios.delete(url, this.headerConfig())
                .then(response => {
                    window.alert(response.data.message)
                    this.getTipeKamar()
                })
                .catch(error => console.log(error))
        }
    }
    handleFile = (event) => {
        this.setState({
            foto: event.target.files[0]
        })
    }
    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    componentDidMount() {
        this.getTipeKamar()
    }
    close = () => {
        $("#modal_tipe_kamar").hide()
    }

    convertToRupiah(number) {

        if (number) {

            var rupiah = "";

            var numberrev = number

                .toString()

                .split("")

                .reverse()

                .join("");

            for (var i = 0; i < numberrev.length; i++)

                if (i % 3 === 0) rupiah += numberrev.substr(i, 3) + ".";

            return (

                "Rp. " +

                rupiah

                    .split("", rupiah.length - 1)

                    .reverse()

                    .join("")

            );

        } else {

            return number;

        }

    }
    render() {
        return (
            <div>
                <NavbarAdmin />
                <div className="flex justify-between mb-2 bg-gray-700 text-white p-1.5 rounded-xl items-center m-6">
                    <h1 className="ml-4 font-bold text-3xl tracking-wider">Daftar Tipe Kamar</h1>
                    <button className="hover:bg-blue-400 bg-blue-600 text-white font-bold uppercase text-xs px-4 py-3 rounded-md shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 tracking-wider" type="button" onClick={() => this.Add()}>
                        Tambah Tipe Kamar
                    </button>
                </div>
                <div className="grid grid-cols-4 m-6 drop-shadow-xl">
                    {this.state.tipe_kamar.map((item) => (
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 mr-2">
                            <a href="#">
                                <img class="rounded-t-lg" src={`http://localhost:8000/foto/room/${item.foto}`} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.nama_tipe_kamar}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-white">{item.deskripsi}</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-white">{this.convertToRupiah(item.harga)}</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-blue-800">
                                    <button data-tooltip-target="tooltip-edit" data-tooltip-placement="bottom" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-700" onClick={() => this.Edit(item)}>
                                        <FiEdit3 size={18} />
                                        <span class="sr-only">Edit</span>
                                    </button>
                                    <div id="tooltip-edit" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-blue-600">
                                        Edit
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                    <button data-tooltip-target="tooltip-hapus" data-tooltip-placement="bottom" type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => this.dropTipeKamar(item)}>
                                        <MdDelete size={18} />
                                        <span class="sr-only">Hapus</span>
                                    </button>
                                    <div id="tooltip-hapus" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-red-600">
                                        Hapus
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                    </div>

                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                <div id="modal_tipe_kamar" tabindex="-1" aria-hidden="true" class="overflow-x-auto fixed top-0 left-0 right-0 z-50 hidden w-full p-4 md:inset-0 h-modal md:h-full bg-tranparent bg-black bg-opacity-50">
                    <div class="flex lg:h-auto w-auto justify-center">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-600 w-1/3">
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-blue-500 dark:hover:text-white" onClick={() => this.close()}>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Tutup modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-bold text-gray-900 dark:text-white tracking-widest">Edit Tipe Kamar</h3>
                                <form class="space-y-6" onSubmit={(event) => this.saveTipeKamar(event)}>
                                    <div className="tracking-wider">
                                        <label for="nama_tipe_kamar" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Nama Tipe Kamar</label>
                                        <input type="text" name="nama_tipe_kamar" id="nama_tipe_kamar" value={this.state.nama_tipe_kamar} onChange={this.bind} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg dark:focus:ring-lime-500 dark:focus:border-lime-700 block w-full p-2.5 dark:border-none dark:bg-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Masukkan nama tipe kamar" required />
                                    </div>

                                    <div className="tracking-wider">
                                        <label for="deskripsi" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Deskripsi</label>
                                        <input type="text" name="deskripsi" id="deskripsi" value={this.state.deskripsi} onChange={this.bind} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-700 block w-full p-2.5 dark:bg-gray-500 dark:border-none dark:placeholder-gray-400 dark:text-white" placeholder="Masukkan deskripsi tipe kamar" required />
                                    </div>
                                    <div className="tracking-wider">
                                        <label for="foto" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Foto</label>
                                        <input type="file" name="foto" id="foto" placeholder="Pilih foto tipe kamar" onChange={this.handleFile} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-700 block w-full px-2 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div className="tracking-wider">
                                        <label for="harga" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Harga</label>
                                        <input type="text" name="harga" id="harga" value={this.state.harga} onChange={this.bind} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-700 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Masukkan harga tipe kamar" required />
                                    </div>

                                    <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-lime-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}