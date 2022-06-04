/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {

    constructor(
        private readonly statisticsService: StatisticsService
    ) {}

    @Get('/years')
    getYears(){
        return this.statisticsService.getYearList();
    }

    @Get('/authors')
    getAuthors() {
        return this.statisticsService.getAuthorList();
    }

    @Get('/countries')
    getCountries(){
        return this.statisticsService.getCountryList();
    }
}
