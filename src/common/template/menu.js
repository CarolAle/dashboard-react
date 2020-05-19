import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <MenuItem path="#" label="Dashboard" icon="tachometer-alt" />

        <MenuTree label="Cadastro" icon="edit">
        <MenuItem path="/billyngCycles" label="Ciclos de Pagamentos" icon="usd" />
        </MenuTree>
    </ul>
    </nav>
    
)