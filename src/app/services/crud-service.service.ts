import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  public baseUrl = "https://sene-backend-1.onrender.com/api";

  constructor(private http: HttpClient) {}


  /**
   * Récupère des données à partir d'un point de terminaison spécifié.
   *
   * @param {string} name - Le nom du point de l'endpoint.
   * @return {Observable<any>} Un observable qui émet les données récupérées.
   */
  get(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  /**
   * Envoie une requête POST à l'endpoint spécifié pour créer une nouvelle ressource.
   *
   * @param {string} name - Le nom de l'endpoint.
   * @param {Object} object - Les données à envoyer dans le corps de la requête.
   * @return {Observable<Object>} Un observable qui émet la réponse du serveur.
   */
  post(name: string, object: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${name}/ajout`, object);
  }


  /**
   * Met à jour un objet dans la collection spécifiée.
   *
   * @param {string} name - Le nom de l'endpoint.
   * @param {number} id - L'ID de l'objet à mettre à jour.
   * @param {Object} object - L'objet mis à jour.
   * @return {Observable<Object>} Un observable qui émet l'objet mis à jour.
   */
  update(name: string,id: number, object: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${name}/modifier/${id}`, object);
  }


  active(name: string, id: number, object: Object): Observable<Object> {
    return this.http.patch(`${this.baseUrl}/${name}/${id}`, object);
  }
  

  /**
    * Supprime un objet d'une collection spécifiée.
    *
    * @param {string} name - Le nom de l'endpoint .
    * @param {number} id - L'ID de l'objet à supprimer.
    * @return {Observable<any>} Un observable qui émet la réponse du serveur.
    */
   
  delete(name: string,id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${name}/supprimer/${id}`);
  }

}
