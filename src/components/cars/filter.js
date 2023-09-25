import React from "react";
import '../../App.css';
import '../../filter.css';

const Filter = () => {
    return (
        <>
            {/* Filter Box */}
            <div className="search-box row container">
                {/* Filter selector */}
                <div className="search-container col-lg-10">
                    <div className="col form-box">
                        <label className="search-label">Tipe Driver</label>
                        <select className="form-select dropdown" value={0}>
                            <option value={0}>
                                Pilih Tipe Driver
                            </option>
                            <option value="driver">Dengan Sopir</option>
                            <option value="no-driver">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className="col form-box calendar-box">
                        <label className="search-label calendar-label">Tanggal</label>
                        <input type="date" id="available-date" />
                    </div>
                    <div className="col form-box">
                        <label className="search-label">Waktu Jemput/Ambil</label>
                        <select className="form-select clock" id="available-time" value="">
                            <option value="">
                                Pilih Waktu
                            </option>
                            <option value={8} style={{ justifyContent: "end" }}>
                                08.00 WIB
                            </option>
                            <option value={9}>09.00 WIB</option>
                            <option value={10}>10.00 WIB</option>
                            <option value={11}>11.00 WIB</option>
                            <option value={12}>12.00 WIB</option>
                        </select>
                    </div>
                    <div className="col form-box">
                        <label className="search-label">Jumlah Penumpang (Optional)</label>
                        <input type="text" id="capacity" />
                    </div>
                </div>
                {/* Filter button */}
                <div className="col-lg-2">
                    <button className="btn btn-success filter-button" id="search-button">
                        Cari Mobil
                    </button>
                </div>
            </div>
        </>
    );
};

export default Filter;
