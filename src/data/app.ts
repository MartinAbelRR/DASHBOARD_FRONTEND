import Dashboard from '../icons/Dashboard.astro';
import User from '../components/User.astro';

import type { Indicador, Item } from './interfaces.ts';

export const itemsSideBarTop: Item[] = [
    {
        id: '1',
        title: 'Dashboard',
        icon: Dashboard,
        path: '/'
    },
    {
        id: '2',
        title: 'Ciencia de Datos',
        icon: User,
        path: '/clientes'
    },
]

export const GET_indicadores = async () => {
    const indicadores = await fetch('http://127.0.0.1:8000/machine_learning/indicadores_totales/')
    const indicadoresJson: Indicador[] = await indicadores.json()

    return indicadoresJson 
}

export const GET_ventas_mensuales = async () => {
    const ventas = await fetch('http://127.0.0.1:8000/machine_learning/ventas_mensual/')
    const ventasJson = await ventas.json()

    return ventasJson
}