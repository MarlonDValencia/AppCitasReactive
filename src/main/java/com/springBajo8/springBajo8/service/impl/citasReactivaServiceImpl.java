package com.springBajo8.springBajo8.service.impl;

//import com.yoandypv.reactivestack.messages.domain.Message;
//import com.yoandypv.reactivestack.messages.repository.MessageRepository;
//import com.yoandypv.reactivestack.messages.service.MessageService;
import com.springBajo8.springBajo8.domain.citasDTOReactiva;
import com.springBajo8.springBajo8.repository.IcitasReactivaRepository;
import com.springBajo8.springBajo8.service.IcitasReactivaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.List;

@Service
public class citasReactivaServiceImpl implements IcitasReactivaService {

    @Autowired
    private IcitasReactivaRepository IcitasReactivaRepository;

    @Override
    public Mono<citasDTOReactiva> save(citasDTOReactiva citasDTOReactiva) {
        return this.IcitasReactivaRepository.save(citasDTOReactiva);
    }

    @Override
    public Mono<citasDTOReactiva> delete(String id) {
        return this.IcitasReactivaRepository
                .findById(id)
                .flatMap(p -> this.IcitasReactivaRepository.deleteById(p.getId()).thenReturn(p));

    }
    @Override
    public Mono<citasDTOReactiva> update(String id, citasDTOReactiva citasDTOReactiva) {
        return this.IcitasReactivaRepository.findById(id)
                .flatMap(citasDTOReactiva1 -> {
                    citasDTOReactiva.setId(id);
                    return save(citasDTOReactiva);
                })
                .switchIfEmpty(Mono.empty());
    }


    public Mono<citasDTOReactiva> updateState(String id){
        return IcitasReactivaRepository.findById(id)
                .flatMap(citasDTOReactiva1 -> {
                    citasDTOReactiva1.setFechaReservaCita("");
                    citasDTOReactiva1.setEstadoReservaCita("Cancelled");
                    return save(citasDTOReactiva1);
                })
                .switchIfEmpty(Mono.empty());
    }

    //Consultar nombre médico que lo va a atender por ID Cita
    public Mono<String> getDoctor (String id){
        return IcitasReactivaRepository.findById(id)
                .flatMap(citasDTOReactiva1 -> Mono.just(citasDTOReactiva1.getNombreMedico())).switchIfEmpty(Mono.empty());
    }

    //Agregar Padecimientos y tratamientos
    public Flux<citasDTOReactiva> agregarHistoriaClinica(String IdPaciendte,String padecimiento, String tratamiento){
        return IcitasReactivaRepository.findByIdPaciente(IdPaciendte)
                .flatMap(citasDTOReactiva1 -> {
                    HashMap<String,String> historia = citasDTOReactiva1.getHistoriaClinica();
                    historia.put("ID",IdPaciendte);
                    historia.put("Tratamiento",historia.get("Tratamiento")+","+tratamiento);
                    historia.put("Padecimiento",historia.get("Padecimiento")+","+tratamiento);
                    return save(citasDTOReactiva1);
                }).switchIfEmpty(Mono.empty());
    }

    @Override
    public Flux<citasDTOReactiva> findByIdPaciente(String idPaciente) {
        return this.IcitasReactivaRepository.findByIdPaciente(idPaciente);
    }

    //Consultar cita por fecha y hora
    @Override
    public Mono<citasDTOReactiva> findByFechaYHora(String fechaReservaCita, String horaReservaCita) {
        return this.IcitasReactivaRepository.findByFechaYHora(fechaReservaCita,horaReservaCita);
    }

    @Override
    public Flux<citasDTOReactiva> findAll() {
        return this.IcitasReactivaRepository.findAll();
    }

    @Override
    public Mono<citasDTOReactiva> findById(String id) {
        return this.IcitasReactivaRepository.findById(id);
    }
}
