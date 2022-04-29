const registrarDatos = async(endpoint, data) => {
    let url = `/${endpoint}`;

    await axios({
        'url': url,
        'method': 'post',
        'responseType': 'json',
        'data': data,
    }).then(response => {
        Swal.fire({
            'icon': 'success',
            'title': 'Nuevo Platillo Registrado',
            'text': response.data.nombre
        })
    }).catch(error => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ha ocurrido un error',
            'text': error
        })
    });
};

const obtenerDatos = async(endpoint) => {
    let url = `/${endpoint}`;
    let listaDatos;
    await axios({
            'url': url,
            'method': 'get',
            'responseType': 'json'
        })
        .then(response => {
            listaDatos = response.data;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                text: error
            });
        });

    return listaDatos;
};

const eliminarDatos = async(endpoint, _id) => {
    let url = `/${endpoint}`;
    await axios({
        'url': url,
        'method': 'delete',
        'responseType': 'json',
        'data': {
            '_id': _id
        }
    }).then(response => {
        Swal.fire({
            'icon': 'success',
            'title': response.data.msj
        }).then(() => {
            window.location.reload();
        });
    }).catch(error => {
        Swal.fire({
            icon: 'error',
            text: error
        });
    });
};