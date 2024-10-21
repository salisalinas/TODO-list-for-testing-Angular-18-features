import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, updateDoc, deleteDoc, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import TodoItem from '../interfaces/todoItem.interface';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private firestore: Firestore = inject(Firestore);
  //Obtener todas las tareas
  getItems(): Observable<TodoItem[]> {
    const itemCollection = collection(this.firestore, 'items');
    return collectionData(itemCollection, { idField: 'id' }) as Observable<TodoItem[]>;
  }
  //Obtener una tarea
  getItem(id: string): Observable<TodoItem> {
    const itemDoc = doc(this.firestore, `items/${id}`);
    return docData(itemDoc, { idField: 'id' }) as Observable<TodoItem>;
  }
  //Añadir tarea 
  async addItem(item: TodoItem) {
    await addDoc(collection(this.firestore, 'items'), item);
  }
  //Actualizar tarea
  async updateItem(id: string, item: Partial<TodoItem>) {
    const itemDoc = doc(this.firestore, `items/${id}`);
    await updateDoc(itemDoc, item);
  }
  //Borrar tarea
  async deleteItem(id: string) {
    const itemDoc = doc(this.firestore, `items/${id}`);
    await deleteDoc(itemDoc);
  }
}