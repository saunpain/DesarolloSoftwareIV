package com.example.lab8_ngarcia_ewu_pdeglado.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.example.lab8_ngarcia_ewu_pdeglado.Models.Productos;
import com.example.lab8_ngarcia_ewu_pdeglado.Services.ProductosDb;

@RestController
public class ProductorsController {

    @GetMapping("/productos/all")
    public List<Productos> ObtenerTodosProductos(){
        return new ProductosDb().ObtenerProductos();
    }

    @PostMapping("/producto")
    public int InsertarProducto(@RequestBody Productos producto){
        return new ProductosDb().GuardarProductos(producto);
    }

    @PutMapping("/producto")
    public int ActualizarProducto(@RequestBody Productos producto){
        return new ProductosDb().ActualizarProductos(producto);
    }
    @DeleteMapping("/producto/{productoId}")
    public int Delete(@PathVariable("productoId") int pid){
        return new ProductosDb().EliminarProducto(pid);
    }
}
 