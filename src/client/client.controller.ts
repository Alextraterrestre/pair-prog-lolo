import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }

  @Post('create')
  async create(@Body() createClientDto: CreateClientDto) {
    //client exist?
    const client = await this.clientService.findOneByEmail(createClientDto.email)
    if (client) {
      return 'Already exist'
    }
    //create client
    await this.clientService.create(createClientDto)
    //retour de la réponse
    return 'Le client à été trouver'
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.clientService.remove(id);
    return 'user has been delete'
  }
}