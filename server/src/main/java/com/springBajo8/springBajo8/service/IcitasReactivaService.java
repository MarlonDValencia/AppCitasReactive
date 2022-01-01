package com.springBajo8.springBajo8.service;

//import com.yoandypv.reactivestack.messages.domain.Message;
import com.springBajo8.springBajo8.domain.citasDTOReactiva;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IcitasReactivaService {
    Mono<citasDTOReactiva> save(citasDTOReactiva citasDTOReactiva);

    Mono<citasDTOReactiva> delete(String id);

    Mono<citasDTOReactiva> update(String id, citasDTOReactiva citasDTOReactiva);

    Flux<citasDTOReactiva> findByfechaReservaCita(String fechaReservaCita);

    Mono<citasDTOReactiva> findByhoraReservaCita(String fechaReservaCita);

    Mono<citasDTOReactiva> findByFechaYHora(String fechaReservaCita, String fechaHora);

    Flux<citasDTOReactiva> findByIdPaciente(String idPaciente);

    Flux<citasDTOReactiva> findAll();

    Mono<citasDTOReactiva> findById(String id);
}
